"use client";
import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/moon">
      <video playsInline autoPlay loop className={styles.video}>
        <source src={"/pronin.mp4"} type="video/mp4" />
      </video>
      </Link>
      {/* <Link href="/">
        <div className={styles.logo}></div>
      </Link> */}
    </div>
  );
};

export default page;

// muted добовляет звук или уберает.