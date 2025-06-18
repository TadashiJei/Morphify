"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text3D, Environment } from "@react-three/drei"
import { Suspense } from "react"

function FloatingCard({
  position,
  rotation,
}: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="#5ec57e" transparent opacity={0.8} />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <FloatingCard position={[-3, 2, 0]} rotation={[0, 0.3, 0]} />
      <FloatingCard position={[3, -1, -2]} rotation={[0, -0.3, 0]} />
      <FloatingCard position={[0, 1, -1]} rotation={[0, 0, 0.1]} />

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Text3D font="/fonts/Geist_Bold.json" size={0.5} height={0.1} position={[-1.5, 0, 0]}>
          DeFi
          <meshStandardMaterial color="#5ec57e" />
        </Text3D>
      </Float>
    </>
  )
}

export function Hero3D() {
  return (
    <div className="w-full h-96 relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}
