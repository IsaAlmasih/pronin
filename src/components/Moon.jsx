"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

import MoonTexture from "../assets/825.png";

function Moon() {
  const moonRef = useRef();
  const texture = useLoader(TextureLoader, MoonTexture.src);

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.0005; {
        /*Скорость вращения.  */
      }
    }
  });

  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[2, 32, 32]}/>   {/*Гиометрия шара.  */}
      <meshStandardMaterial map={texture}/>
    </mesh>
  );
}
export default Moon;