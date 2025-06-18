"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Text3D, Environment, Sphere, Box, Torus } from "@react-three/drei"
import { Suspense, useRef } from "react"
import type * as THREE from "three"

function AnimatedSphere({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </Sphere>
    </Float>
  )
}

function FloatingCard({
  position,
  rotation,
}: { position: [number, number, number]; rotation: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = rotation[2] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Box ref={meshRef} position={position} rotation={rotation} args={[2, 1.2, 0.1]}>
        <meshStandardMaterial color="#5ec57e" transparent opacity={0.8} />
      </Box>
    </Float>
  )
}

function CryptoSymbols() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <Torus position={[4, 2, -1]} args={[0.3, 0.1, 16, 32]}>
          <meshStandardMaterial color="#f59e0b" />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.3}>
        <Box position={[-4, -1, 1]} args={[0.6, 0.6, 0.6]}>
          <meshStandardMaterial color="#3b82f6" />
        </Box>
      </Float>
    </>
  )
}

function Scene() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5ec57e" />

      <FloatingCard position={[-3, 2, 0]} rotation={[0, 0.3, 0]} />
      <FloatingCard position={[3, -1, -2]} rotation={[0, -0.3, 0]} />
      <FloatingCard position={[0, 1, -1]} rotation={[0, 0, 0.1]} />

      <AnimatedSphere position={[-2, -2, 2]} color="#34d399" />
      <AnimatedSphere position={[2, 3, 1]} color="#10b981" />

      <CryptoSymbols />

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Text3D font="/fonts/Geist_Bold.json" size={0.5} height={0.1} position={[-1.5, 0, 0]}>
          DeFi
          <meshStandardMaterial color="#5ec57e" />
        </Text3D>
      </Float>
    </>
  )
}

export function EnhancedHero3D() {
  return (
    <div className="w-full h-96 relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
