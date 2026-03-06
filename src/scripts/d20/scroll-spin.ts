import type Lenis from 'lenis'
import { getLenis } from './scroll'

export interface ScrollSpinFrame {
  rotYOffset: number
}

export interface ScrollSpinBoost {
  tick: (deltaSeconds: number) => ScrollSpinFrame
  dispose: () => void
}

const ACTIVE_WINDOW_MS = 140
const MIN_SCROLL_VELOCITY = 0.015
const VELOCITY_TO_BOOST = 0.03
const MAX_BOOST_SPEED = 2.4
const ATTACK_LERP = 0.28
const RELEASE_LERP = 0.08

function lerp(current: number, target: number, factor: number): number {
  return current + (target - current) * factor
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

export function initScrollSpinBoost(): ScrollSpinBoost {
  let targetBoostSpeed = 0
  let currentBoostSpeed = 0
  let accumulatedRotYOffset = 0
  let lastScrollAt = 0

  const updateFromVelocity = (velocity: number): void => {
    const magnitude = Math.abs(velocity)
    if (magnitude < MIN_SCROLL_VELOCITY) {
      return
    }

    lastScrollAt = performance.now()
    const normalized = Math.tanh(magnitude * VELOCITY_TO_BOOST)
    targetBoostSpeed = clamp(normalized * MAX_BOOST_SPEED, 0, MAX_BOOST_SPEED)
  }

  const lenis = getLenis()
  let unsubscribeLenis: (() => void) | null = null

  let lastNativeY = window.scrollY
  let lastNativeTime = performance.now()

  const onNativeScroll = (): void => {
    const now = performance.now()
    const deltaTime = Math.max(now - lastNativeTime, 16)
    const deltaY = Math.abs(window.scrollY - lastNativeY)
    const velocity = deltaY / deltaTime

    lastNativeY = window.scrollY
    lastNativeTime = now
    updateFromVelocity(velocity)
  }

  if (lenis) {
    unsubscribeLenis = lenis.on('scroll', (state: Lenis) => {
      updateFromVelocity(state.velocity)
    })
  } else {
    window.addEventListener('scroll', onNativeScroll, { passive: true })
  }

  const tick = (deltaSeconds: number): ScrollSpinFrame => {
    const now = performance.now()
    const isActivelyScrolling = now - lastScrollAt <= ACTIVE_WINDOW_MS
    const nextTargetBoost = isActivelyScrolling ? targetBoostSpeed : 0
    const lerpFactor = isActivelyScrolling ? ATTACK_LERP : RELEASE_LERP

    currentBoostSpeed = lerp(currentBoostSpeed, nextTargetBoost, lerpFactor)
    accumulatedRotYOffset += currentBoostSpeed * deltaSeconds

    return {
      rotYOffset: accumulatedRotYOffset,
    }
  }

  const dispose = (): void => {
    unsubscribeLenis?.()
    if (!lenis) {
      window.removeEventListener('scroll', onNativeScroll)
    }
  }

  return { tick, dispose }
}
