
import { ContactShadows, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { Logo } from "../logo";

export function Scene() {
    return (
        <>
            {/* Ambient light for overall scene illumination */}
            <ambientLight intensity={0.3} color="#1a1a2e" />

            {/* Main key light - cooler tone for definition */}
            <directionalLight
                position={[8, 12, 6]}
                intensity={1.0}
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

            {/* Primary purple glow - centered above logo */}
            <spotLight
                position={[0, 6, 6]}
                target-position={[0, -1, 0]}
                intensity={4.0}
                angle={0.9}
                penumbra={0.8}
                color="#8b5cf6"
                distance={18}
                decay={2}
            />

            {/* Secondary purple glow from side for rim lighting */}
            <spotLight
                position={[8, 4, 2]}
                target-position={[0, -1, 0]}
                intensity={2.8}
                angle={0.7}
                penumbra={0.6}
                color="#a855f7"
                distance={16}
                decay={2}
            />

            {/* Backlight for dramatic rim effect */}
            <spotLight
                position={[-6, 8, -4]}
                target-position={[0, 0, 0]}
                intensity={2.2}
                angle={0.6}
                penumbra={0.5}
                color="#c084fc"
                distance={20}
            />

            {/* Bottom glow for platform */}
            <pointLight
                position={[0, -1.8, 0]}
                intensity={1.8}
                color="#6366f1"
                distance={8}
                decay={2}
            />

            {/* Additional side accent lights */}
            <pointLight
                position={[4, 2, 4]}
                intensity={1.0}
                color="#9333ea"
                distance={12}
                decay={2}
            />
            
            <pointLight
                position={[-4, 2, 4]}
                intensity={1.0}
                color="#9333ea"
                distance={12}
                decay={2}
            />

            {/* Fill light to prevent harsh shadows */}
            <pointLight
                position={[0, 4, 8]}
                intensity={0.8}
                color="#ddd6fe"
                distance={15}
                decay={2}
            />

            {/* Your Logo */}
            <Suspense fallback={null}>
                <Logo />
            </Suspense>

            {/* Enhanced contact shadows for better grounding */}
            <ContactShadows
                position={[0, -2.3, 0]}
                opacity={0.6}
                width={8}
                height={8}
                blur={1.5}
                far={2.5}
                color="#000000"
            />

            {/* Environment for subtle reflections */}
            <Environment preset="city" environmentIntensity={0.2} />
        </>
    );
}