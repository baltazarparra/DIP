import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export interface DiamondState {
  x: number
  y: number
  scale: number
  rotOffsetX: number
  rotOffsetY: number
  opacity: number
  iridescence: number
}

export const diamondState: DiamondState = {
  x: 0,
  y: -1.3,
  scale: 0.8,
  rotOffsetX: 0,
  rotOffsetY: 0,
  opacity: 1,
  iridescence: 0.4,
}

export function initChoreography(): void {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.5,
    },
  })

  // Hero (0 - 0.12): bottom-center, subtle idle
  tl.to(
    diamondState,
    {
      x: 0,
      y: -1.3,
      scale: 0.8,
      rotOffsetX: 0,
      rotOffsetY: 0,
      opacity: 1,
      duration: 0.12,
      ease: 'none',
    },
    0,
  )

  // WhyDip (0.12 - 0.28): drift bottom-right, shrink, tilt
  tl.to(
    diamondState,
    {
      x: 1.8,
      y: -1.1,
      scale: 0.6,
      rotOffsetX: 0.4,
      rotOffsetY: Math.PI * 0.5,
      opacity: 1,
      iridescence: 0.4,
      duration: 0.16,
      ease: 'power2.inOut',
    },
    0.12,
  )

  // Protocol (0.28 - 0.50): bottom-left, slow rotation
  tl.to(
    diamondState,
    {
      x: -1.5,
      y: -1.0,
      scale: 0.7,
      rotOffsetX: 1.2,
      rotOffsetY: Math.PI * 1.5,
      opacity: 1,
      iridescence: 0.5,
      duration: 0.22,
      ease: 'power2.inOut',
    },
    0.28,
  )

  // Artifacts (0.50 - 0.65): bottom center-right
  tl.to(
    diamondState,
    {
      x: 1.2,
      y: -1.2,
      scale: 0.65,
      rotOffsetX: 2.0,
      rotOffsetY: Math.PI * 2.5,
      opacity: 1,
      iridescence: 0.6,
      duration: 0.15,
      ease: 'power2.inOut',
    },
    0.50,
  )

  // PrdExample (0.65 - 0.80): small, bottom-right, decorative
  tl.to(
    diamondState,
    {
      x: 2.0,
      y: -1.4,
      scale: 0.3,
      rotOffsetX: 2.8,
      rotOffsetY: Math.PI * 3.5,
      opacity: 1,
      iridescence: 0.3,
      duration: 0.15,
      ease: 'power2.inOut',
    },
    0.65,
  )

  // GettingStarted (0.80 - 0.92): back to bottom-center, grow, dramatic spin
  tl.to(
    diamondState,
    {
      x: 0,
      y: -1.2,
      scale: 0.8,
      rotOffsetX: 4.0,
      rotOffsetY: Math.PI * 5,
      opacity: 1,
      iridescence: 0.5,
      duration: 0.12,
      ease: 'power2.inOut',
    },
    0.80,
  )

  // Footer (0.92 - 1.0): fade out, shrink
  tl.to(
    diamondState,
    {
      x: 0,
      y: -1.6,
      scale: 0.2,
      rotOffsetX: 5.0,
      rotOffsetY: Math.PI * 6,
      opacity: 0,
      iridescence: 0.2,
      duration: 0.08,
      ease: 'power2.in',
    },
    0.92,
  )
}
