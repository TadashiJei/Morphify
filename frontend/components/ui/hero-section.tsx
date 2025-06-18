"use client"

import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Shape, ExtrudeGeometry } from "three"

const Box = ({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) => {
  const shape = new Shape()
  const angleStep = Math.PI * 0.5
  const radius = 1

  shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1)
  shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2)
  shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3)
  shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4)

  const extrudeSettings = {
    depth: 0.3,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 20,
    curveSegments: 20,
  }

  const geometry = new ExtrudeGeometry(shape, extrudeSettings)
  geometry.center()

  return (
    <mesh geometry={geometry} position={position} rotation={rotation}>
      <meshPhysicalMaterial
        color="#5ec57e"
        metalness={0.9}
        roughness={0.1}
        reflectivity={0.9}
        ior={1.5}
        emissive="#002d14"
        emissiveIntensity={0.05}
        transparent={false}
        opacity={1.0}
        transmission={0.0}
        thickness={0.5}
        clearcoat={0.5}
        clearcoatRoughness={0.05}
        sheen={0.8}
        sheenRoughness={0.6}
        sheenColor="#34d399"
        specularIntensity={1.0}
        specularColor="#ffffff"
        iridescence={0.8}
        iridescenceIOR={1.3}
        iridescenceThicknessRange={[100, 400]}
        flatShading={false}
        side={0}
        alphaTest={0}
        depthWrite={true}
        depthTest={true}
      />
    </mesh>
  )
}

const AnimatedBoxes = () => {
  const groupRef = useRef<any>()

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.02
      groupRef.current.rotation.y += delta * 0.008
    }
  })

  const boxes = Array.from({ length: 60 }, (_, index) => ({
    position: [(index - 30) * 0.8, Math.sin(index * 0.2) * 2, Math.cos(index * 0.1) * 3] as [number, number, number],
    rotation: [(index - 15) * 0.08, Math.PI / 2 + index * 0.05, index * 0.02] as [number, number, number],
    id: index,
  }))

  return (
    <group ref={groupRef}>
      {boxes.map((box) => (
        <Box key={box.id} position={box.position} rotation={box.rotation} />
      ))}
    </group>
  )
}

export const Scene = () => {
  const [cameraPosition] = React.useState<[number, number, number]>([8, 8, 25])

  return (
    <div className="w-full h-full z-0">
      <Canvas camera={{ position: cameraPosition, fov: 45 }}>
        <ambientLight intensity={12} color="#f5f5dc" />
        <directionalLight position={[15, 15, 8]} intensity={8} color="#5ec57e" />
        <directionalLight position={[-10, 10, 5]} intensity={6} color="#34d399" />
        <pointLight position={[0, 0, 10]} intensity={4} color="#10b981" />
        <AnimatedBoxes />
      </Canvas>
    </div>
  )
}
