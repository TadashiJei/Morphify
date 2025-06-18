"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Text3D, Environment, Sphere, Box, Torus } from "@react-three/drei"
import { Suspense, useRef } from "react"
import type * as THREE from "three"

function FloatingCoin({ position, delay = 0 }: { position: [number, number, number]; delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 + delay
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Torus ref={meshRef} position={position} args={[0.4, 0.15, 16, 32]}>
        <meshStandardMaterial color="#5ec57e" metalness={0.8} roughness={0.2} />
      </Torus>
    </Float>
  )
}

function CreditCard({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <Box ref={meshRef} position={position} args={[2.5, 1.6, 0.1]}>
        <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.1} />
      </Box>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5ec57e" />

      <FloatingCoin position={[-3, 1, 0]} delay={0} />
      <FloatingCoin position={[3, -1, -1]} delay={1} />
      <FloatingCoin position={[0, 2, 1]} delay={2} />

      <CreditCard position={[2, 0, -2]} />
      <CreditCard position={[-2, -1, 1]} />

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Text3D font="/fonts/Geist_Bold.json" size={0.8} height={0.2} position={[-2, 0, 0]}>
          DeFi
          <meshStandardMaterial color="#5ec57e" metalness={0.5} roughness={0.3} />
        </Text3D>
      </Float>

      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
        <Sphere position={[0, -2, 0]} args={[0.3, 32, 32]}>
          <meshStandardMaterial color="#34d399" transparent opacity={0.8} />
        </Sphere>
      </Float>
    </>
  )
}

export function Hero3DScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        </Suspense>
      </Canvas>
    </div>
  )
}
