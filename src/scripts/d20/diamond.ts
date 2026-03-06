import * as THREE from 'three'

export function createDiamond(envMap: THREE.Texture): THREE.Mesh {
  const geometry = new THREE.IcosahedronGeometry(1, 0)
  geometry.computeVertexNormals()

  const material = new THREE.MeshPhysicalMaterial({
    roughness: 0.0,
    metalness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0.0,
    envMap,
    envMapIntensity: 2.5,
    side: THREE.FrontSide,
    color: new THREE.Color('#334466'),
    iridescence: 1.0,
    iridescenceIOR: 2.4,
    iridescenceThicknessRange: [100, 800],
    reflectivity: 1,
    specularIntensity: 2.0,
    specularColor: new THREE.Color('#66ffff'),
    sheen: 0.4,
    sheenRoughness: 0.1,
    sheenColor: new THREE.Color('#00ddff'),
  })

  const mesh = new THREE.Mesh(geometry, material)
  mesh.scale.setScalar(0.8)
  return mesh
}
