"use client";

import styles from "./style.module.css";
import Link from "next/link";
import { LuAlertTriangle } from "react-icons/lu";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { LuHelpingHand } from "react-icons/lu";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

import { usePathname } from "next/navigation";
import { FaHouse } from "react-icons/fa6";
import clsx from "clsx";
import { useState } from "react";

export default function NavbarMobile() {
  const path = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  function toggleNav() {
    return setOpenMenu((state) => !state);
  }

  return (
    <>
      <div
        className={clsx(styles.menu, {
          [styles.open]: openMenu == true,
        })}
        onClick={toggleNav}
      >
        <RiMenu3Line fontSize={32} />
      </div>
      <nav className={clsx(styles.nav, { [styles.open]: openMenu == true })}>
        <div className={styles.close}>
          <span>B R A Z A</span>
          <IoCloseSharp fontSize={32} onClick={toggleNav} />
        </div>
        <Link
          className={clsx(styles.navItem, {
            [styles.selected]: path === "/campanhas",
          })}
          href={"/campanhas"}
        >
          <LuHelpingHand fontSize={20} />
          <span>Ajude Agora</span>
        </Link>
        <Link
          className={clsx(styles.navItem, {
            [styles.selected]: path === "/seja-um-voluntario",
          })}
          href={"/seja-um-voluntario"}
        >
          <LiaHandsHelpingSolid fontSize={20} />
          <span>Seja um voluntário</span>
        </Link>
        <Link
          className={clsx(styles.navItem, {
            [styles.selected]: path === "/imoveis/cadastro",
          })}
          href={"/seja-um-voluntario"}
        >
          <FaHouse fontSize={20} />
          <span>Cadastre um imóvel</span>
        </Link>
        <Link
          className={clsx(styles.navItem, {
            [styles.selected]: path === "/noticias",
          })}
          href={"/noticias"}
        >
          <LuAlertTriangle fontSize={20} />
          <span>Alertas!</span>
        </Link>
        <Link
          className={clsx(styles.navLogin, {
            [styles.selected]: path === "/login",
          })}
          href={"/login"}
        >
          <span>Login</span>
        </Link>
      </nav>
    </>
  );
}
