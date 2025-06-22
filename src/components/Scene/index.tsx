import { ContactShadows, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { Logo } from "../Logo";

export function Scene() {
    return (
      <>
        {/* Main ambient light */}
        <ambientLight intensity={0.4} />
        
        {/* Key light from top-right */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
        {/* Purple accent light matching the photo */}
        <spotLight 
          position={[-5, 8, 5]} 
          intensity={2}
          angle={0.6}
          penumbra={0.5}
          color="#a855f7"
          castShadow
        />
        
        {/* Fill light from the left */}
        <pointLight 
          position={[-8, 5, 2]} 
          intensity={0.8} 
          color="#c084fc"
        />
        
        {/* Rim light for edge definition */}
        <directionalLight 
          position={[-10, 2, -5]} 
          intensity={0.6}
          color="#ddd6fe"
        />
        
        {/* Your Logo */}
        <Suspense fallback={null}>
          <Logo />
        </Suspense>
        
        {/* Contact shadows matching the photo */}
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.6}
          width={8} 
          height={8} 
          blur={2.5} 
          far={2}
          color="#000000"
        />
        {/* Environment for subtle reflections */}
        <Environment preset="city" />
      </>
    );
  }