import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { createDiamond } from './diamond'
import { diamondState } from './choreography'
import { initDiamondInteraction } from './interaction'

export interface D20Scene {
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  diamond: THREE.Mesh
  dispose: () => void
}

function lerp(current: number, target: number, factor: number): number {
  return current + (target - current) * factor
}

export function initScene(canvas: HTMLCanvasElement): D20Scene {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.1
  renderer.setClearColor(0x000000, 1)

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  )
  camera.position.set(0, 0, 5)

  const pmremGenerator = new THREE.PMREMGenerator(renderer)
  pmremGenerator.compileEquirectangularShader()
  const envMap = pmremGenerator.fromScene(new RoomEnvironment()).texture
  pmremGenerator.dispose()

  const diamond = createDiamond(envMap)
  scene.add(diamond)
  const interaction = initDiamondInteraction({ camera, diamond })

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.0)
  keyLight.position.set(3, 4, 5)
  scene.add(keyLight)

  const cyanLight = new THREE.DirectionalLight(0x00e5ff, 1.5)
  cyanLight.position.set(-4, 2, 3)
  scene.add(cyanLight)

  const warmLight = new THREE.DirectionalLight(0xff8844, 0.6)
  warmLight.position.set(4, -2, -3)
  scene.add(warmLight)

  const rimLight = new THREE.DirectionalLight(0x4488ff, 0.8)
  rimLight.position.set(0, -3, -4)
  scene.add(rimLight)

  const spotLight = new THREE.SpotLight(0xffffff, 3, 15, Math.PI / 6, 0.5)
  spotLight.position.set(0, 3, 5)
  spotLight.target = diamond
  scene.add(spotLight)

  const MOBILE_BREAKPOINT = 768
  let isMobile = window.innerWidth < MOBILE_BREAKPOINT

  const handleResize = () => {
    const w = window.innerWidth
    const h = window.innerHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    isMobile = w < MOBILE_BREAKPOINT
  }
  window.addEventListener('resize', handleResize)

  let animationId: number
  const clock = new THREE.Clock()

  let currentX = 0
  let currentY = -1.3
  let currentScale = 0.8
  let currentRotX = 0
  let currentRotY = 0
  let currentEnvIntensity = 3.0

  const lerpFactor = 0.08

  const animate = () => {
    animationId = requestAnimationFrame(animate)
    const elapsed = clock.getElapsedTime()

    const scaleFactor = isMobile ? 0.7 : 1
    const envBase = isMobile ? 1.8 : 3.0
    const xFactor = isMobile ? 0.5 : 1

    currentX = lerp(currentX, diamondState.x * xFactor, lerpFactor)
    currentY = lerp(currentY, diamondState.y, lerpFactor)
    currentScale = lerp(currentScale, diamondState.scale * scaleFactor, lerpFactor)
    currentEnvIntensity = lerp(currentEnvIntensity, envBase * diamondState.opacity, lerpFactor)

    const idleRotY = elapsed * 0.3
    const idleRotX = Math.sin(elapsed * 0.2) * 0.1
    const targetRotX = idleRotX + diamondState.rotOffsetX
    const targetRotY = idleRotY + diamondState.rotOffsetY

    currentRotX = lerp(currentRotX, targetRotX, lerpFactor)
    currentRotY = lerp(currentRotY, targetRotY, lerpFactor)
    const interactionFrame = interaction.tick()

    diamond.position.x = currentX + interactionFrame.x
    diamond.position.y = currentY + interactionFrame.y
    diamond.rotation.x = currentRotX + interactionFrame.rotX
    diamond.rotation.y = currentRotY + interactionFrame.rotY
    diamond.scale.setScalar(currentScale)

    const mat = diamond.material as THREE.MeshPhysicalMaterial
    mat.envMapIntensity = currentEnvIntensity
    mat.iridescence = diamondState.iridescence

    renderer.render(scene, camera)
  }
  animate()

  const dispose = () => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', handleResize)
    interaction.dispose()
    renderer.dispose()
  }

  return { renderer, scene, camera, diamond, dispose }
}
