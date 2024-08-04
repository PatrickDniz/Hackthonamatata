"use client";

import styles from "./style.module.css";
import Logo from "@/components/Logo";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import NavbarMobile from "../NavbarMobile";

export default function Header() {
  const [width, setWidth] = useState();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth); 
  }
  useEffect(() => {
    handleWindowSizeChange()
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 991;

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Logo />
        {isMobile ?  <NavbarMobile /> : <Navbar />}
        
      </div>
    </header>
  );
}
