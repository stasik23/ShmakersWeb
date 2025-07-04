import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function Logo() {
    const logoSRef = useRef<THREE.Group>(null!)
    const logoPostRef = useRef<THREE.Group>(null!)

    const { scene: logoSScene  } = useGLTF('/LogoS.glb');
    const { scene: logoPostScene } = useGLTF('/LogoPost.glb');

    useFrame(() => { logoSRef.current.rotation.y += 0.001 });

    return (
        <>
            <group ref={logoSRef} position={[0.3, -2, -1]} scale={[1, 1, 1]}>
                <primitive object={logoSScene} />
            </group>
            <group ref={logoPostRef} position={[0.3, -2, -1]} scale={[1, 1, 1]}>
                <primitive object={logoPostScene} />
            </group>

        </>

    );
}