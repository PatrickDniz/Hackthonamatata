import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

export default function Logo({children}) {
  return (
    <Link href={"/"} className={styles.logo}>
      <Image
        src={"/logo.png"}
        alt="Logo"
        width={32}
        height={26}
      />
      {children}
    </Link>
  );
}
