import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function Logo() {
    const logoSRef = useRef<THREE.Group>(null!)
    const logoPostRef = useRef<THREE.Group>(null!)

    const { scene: logoSScene } = useGLTF('/LogoS.glb');
    const { scene: logoPostScene } = useGLTF('/LogoPost.glb');

    // Smooth rotation animation
    useFrame((state) => {
        if (logoSRef.current) {
            logoSRef.current.rotation.y += 0.001;
            // Add subtle floating animation
            logoSRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1 - 2.5;
        }
    });

    return (
        <>
            {/* Logo S with adjusted position for better centering */}
            <group ref={logoSRef} position={[0, -1.5, -1]} scale={[1.2, 1.2, 1.2]}>
                <primitive object={logoSScene} />
            </group>
            
            {/* Logo base/platform */}
            <group ref={logoPostRef} position={[0, -2.2, -1]} scale={[1.1, 1.1, 1.1]}>
                <primitive object={logoPostScene} />
            </group>
        </>
    );
}