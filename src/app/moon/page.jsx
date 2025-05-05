"use client";
import React from "react";

import styles from "./styles.module.css";

import { Canvas } from "@react-three/fiber";
import Moon from "@/components/Moon";
import Link from "next/link";

function page() {
  return (
    <>
    <div className={styles.wrapper}>
    <Link href="/">
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        {" "}
        <ambientLight intensity={2.5} /> {/*Интенсивность света.*/}
        <pointLight position={[10, 10, 10]} /> 
        <Moon />
      </Canvas>
    </Link>
    </div>
    </>
  );
}

export default page;
