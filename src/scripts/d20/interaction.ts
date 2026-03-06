import * as THREE from 'three'
import { getLenis } from './scroll'

export interface DiamondInteractionFrame {
  x: number
  y: number
  rotX: number
  rotY: number
}

export interface DiamondInteraction {
  tick: () => DiamondInteractionFrame
  dispose: () => void
}

interface InitDiamondInteractionParams {
  camera: THREE.PerspectiveCamera
  diamond: THREE.Mesh
}

const MOBILE_BREAKPOINT = 768

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

function lerp(current: number, target: number, factor: number): number {
  return current + (target - current) * factor
}

export function initDiamondInteraction({
  camera,
  diamond,
}: InitDiamondInteractionParams): DiamondInteraction {
  const raycaster = new THREE.Raycaster()
  const pointerNdc = new THREE.Vector2()
  const centerNdc = new THREE.Vector3()

  let isDragging = false
  let activePointerId: number | null = null
  let startClientX = 0
  let startClientY = 0
  let lastClientX = 0
  let lastClientY = 0
  let lastMoveTime = 0

  let consumeClickUntil = 0

  let targetOffsetX = 0
  let targetOffsetY = 0
  let currentOffsetX = 0
  let currentOffsetY = 0

  let targetRotX = 0
  let targetRotY = 0
  let currentRotX = 0
  let currentRotY = 0

  let kickRotX = 0
  let kickRotY = 0

  function isMobile(): boolean {
    return window.innerWidth < MOBILE_BREAKPOINT
  }

  function setPointerFromClient(clientX: number, clientY: number): void {
    pointerNdc.x = (clientX / window.innerWidth) * 2 - 1
    pointerNdc.y = -(clientY / window.innerHeight) * 2 + 1
  }

  function isPointerOverDiamond(clientX: number, clientY: number): boolean {
    setPointerFromClient(clientX, clientY)
    raycaster.setFromCamera(pointerNdc, camera)
    return raycaster.intersectObject(diamond, false).length > 0
  }

  function getDiamondScreenPosition(): { x: number; y: number } {
    diamond.updateMatrixWorld()
    centerNdc.setFromMatrixPosition(diamond.matrixWorld).project(camera)

    return {
      x: (centerNdc.x * 0.5 + 0.5) * window.innerWidth,
      y: (-centerNdc.y * 0.5 + 0.5) * window.innerHeight,
    }
  }

  function stopDragging(): void {
    isDragging = false
    activePointerId = null
    targetOffsetX = 0
    targetOffsetY = 0
    targetRotX = 0
    targetRotY = 0
    getLenis()?.start()
  }

  const onPointerDown = (event: PointerEvent): void => {
    if (isDragging) return
    if (event.pointerType === 'mouse' && event.button !== 0) return
    if (!isPointerOverDiamond(event.clientX, event.clientY)) return

    isDragging = true
    activePointerId = event.pointerId
    startClientX = event.clientX
    startClientY = event.clientY
    lastClientX = event.clientX
    lastClientY = event.clientY
    lastMoveTime = performance.now()
    consumeClickUntil = performance.now() + 450

    const center = getDiamondScreenPosition()
    const relativeX = (event.clientX - center.x) / window.innerWidth
    const relativeY = (event.clientY - center.y) / window.innerHeight

    kickRotY = clamp(kickRotY + relativeX * 2.6, -1.5, 1.5)
    kickRotX = clamp(kickRotX - relativeY * 2.6, -1.1, 1.1)

    getLenis()?.stop()

    if (event.cancelable) {
      event.preventDefault()
    }
  }

  const onPointerMove = (event: PointerEvent): void => {
    if (!isDragging || event.pointerId !== activePointerId) return

    const deltaX = event.clientX - startClientX
    const deltaY = event.clientY - startClientY
    const normalizedX = deltaX / window.innerWidth
    const normalizedY = deltaY / window.innerHeight

    const maxOffsetX = isMobile() ? 0.55 : 0.9
    const maxOffsetY = isMobile() ? 0.45 : 0.7
    targetOffsetX = maxOffsetX * Math.tanh(normalizedX * 3.8)
    targetOffsetY = maxOffsetY * Math.tanh(-normalizedY * 4.4)

    targetRotY = clamp(normalizedX * 1.45, -0.95, 0.95)
    targetRotX = clamp(-normalizedY * 1.2, -0.75, 0.75)

    const now = performance.now()
    const dt = Math.max(now - lastMoveTime, 16)
    const velocityX = (event.clientX - lastClientX) / dt
    const velocityY = (event.clientY - lastClientY) / dt

    kickRotY = clamp(kickRotY + velocityX * 0.055, -1.6, 1.6)
    kickRotX = clamp(kickRotX - velocityY * 0.055, -1.2, 1.2)

    lastClientX = event.clientX
    lastClientY = event.clientY
    lastMoveTime = now

    if (event.cancelable) {
      event.preventDefault()
    }
  }

  const onPointerUp = (event: PointerEvent): void => {
    if (!isDragging || event.pointerId !== activePointerId) return
    stopDragging()
  }

  const onPointerCancel = (event: PointerEvent): void => {
    if (!isDragging || event.pointerId !== activePointerId) return
    stopDragging()
  }

  const onWindowBlur = (): void => {
    if (!isDragging) return
    stopDragging()
  }

  const onClickCapture = (event: MouseEvent): void => {
    if (performance.now() > consumeClickUntil) return
    consumeClickUntil = 0
    event.preventDefault()
    event.stopPropagation()
  }

  window.addEventListener('pointerdown', onPointerDown, { passive: false })
  window.addEventListener('pointermove', onPointerMove, { passive: false })
  window.addEventListener('pointerup', onPointerUp)
  window.addEventListener('pointercancel', onPointerCancel)
  window.addEventListener('blur', onWindowBlur)
  window.addEventListener('click', onClickCapture, true)

  const tick = (): DiamondInteractionFrame => {
    const posLerpFactor = isDragging ? 0.22 : 0.1
    const rotLerpFactor = isDragging ? 0.2 : 0.1

    currentOffsetX = lerp(currentOffsetX, targetOffsetX, posLerpFactor)
    currentOffsetY = lerp(currentOffsetY, targetOffsetY, posLerpFactor)
    currentRotX = lerp(currentRotX, targetRotX, rotLerpFactor)
    currentRotY = lerp(currentRotY, targetRotY, rotLerpFactor)

    const kickDecay = isDragging ? 0.9 : 0.84
    kickRotX *= kickDecay
    kickRotY *= kickDecay

    return {
      x: currentOffsetX,
      y: currentOffsetY,
      rotX: currentRotX + kickRotX,
      rotY: currentRotY + kickRotY,
    }
  }

  const dispose = (): void => {
    window.removeEventListener('pointerdown', onPointerDown)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
    window.removeEventListener('pointercancel', onPointerCancel)
    window.removeEventListener('blur', onWindowBlur)
    window.removeEventListener('click', onClickCapture, true)
  }

  return { tick, dispose }
}
