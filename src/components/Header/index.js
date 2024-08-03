'use client'

import styles from "./style.module.css";
import Link from "next/link";
import Logo from "@/components/Logo";
import { LuAlertTriangle } from "react-icons/lu";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { LuHelpingHand } from "react-icons/lu";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  const path = usePathname(); 
  console.log(path) 
  
  return ( 
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Logo />
        <nav className={styles.nav}>
          <Link className={clsx(styles.navItem, { [styles.selected]: path === "/campanhas" })} href={"/campanhas"}>
            <LuHelpingHand fontSize={20} />
            <span>Ajude Agora</span>
          </Link>
          <Link className={clsx(styles.navItem, { [styles.selected]: path === "/voluntarios" })} href={"/voluntarios"}>
            <LiaHandsHelpingSolid fontSize={20} />
            <span>Seja um voluntário</span>
          </Link>
          <Link className={clsx(styles.navItem, { [styles.selected]: path === "/noticias" })} href={"/noticias"}>
            <LuAlertTriangle fontSize={20} />
            <span>Alertas!</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
