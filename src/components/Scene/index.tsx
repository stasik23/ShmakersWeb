import { ContactShadows, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { Logo } from "../logo";

export function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} color="#1a1a2e" />

      {/* Main key light - cooler tone */}
      <directionalLight
        position={[8, 12, 6]}
        intensity={1.2}
        color="#e0e7ff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001}
      />

      {/* Primary purple glow light - positioned to match reference */}
      <spotLight
        position={[0, 8, 8]}
        target-position={[0, -1, 0]}
        intensity={3.5}
        angle={0.8}
        penumbra={0.6}
        color="#8b5cf6"
        distance={20}
        decay={2}
      />

      {/* Secondary purple accent from below-right */}
      <pointLight
        position={[6, -1, 4]}
        intensity={2.0}
        color="#a855f7"
        distance={15}
        decay={2}
      />

      {/* Rim light for the "S" logo edges */}
      <spotLight
        position={[-8, 6, -2]}
        target-position={[0, 0, 0]}
        intensity={1.8}
        angle={0.5}
        penumbra={0.4}
        color="#c084fc"
        distance={18}
      />

      {/* Subtle fill light to prevent pure black shadows */}
      <pointLight
        position={[-4, 2, 6]}
        intensity={0.6}
        color="#ddd6fe"
        distance={12}
      />

      {/* Base platform illumination */}
      <pointLight
        position={[0, -1.5, 0]}
        intensity={1.2}
        color="#6366f1"
        distance={8}
        decay={2}
      />

      {/* Your Logo */}
      <Suspense fallback={null}>
        <Logo />
      </Suspense>

      {/* Enhanced contact shadows */}
      <ContactShadows
        position={[0, -2.1, 0]}
        opacity={0.8}
        width={10}
        height={10}
        blur={0}
        far={3}
        color="#000000"
      />
      {/* Environment for subtle reflections */}
      <Environment preset="city" environmentIntensity={0.3} />
    </>
  );
}