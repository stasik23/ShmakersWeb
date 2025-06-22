'use client'

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function Logo() {
    const ref = useRef<THREE.Group>(null!)
    const { scene } = useGLTF('/Logo.glb');

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.005
        }

    })

    return (
        <group>
            <primitive
                ref={ref}
                object={scene}
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={[1.5, 1.5, 1.5]}
            />
        </group>
    );
}