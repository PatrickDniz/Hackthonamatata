import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className={styles.logo}>
      <Image
        src={"/logo.png"}
        alt="Logo"
        width={20}
        height={20}
      />
    </Link>
  );
}
