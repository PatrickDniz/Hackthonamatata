import styles from "./style.module.css";
import Logo from "@/components/Logo";
import { RxFigmaLogo } from "react-icons/rx";
import { VscGithubInverted } from "react-icons/vsc";
import { HiOutlineDatabase } from "react-icons/hi";
import { MdOutlineContentPaste } from "react-icons/md";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerTop}>
          <Logo>B R A Z A</Logo>
          <div className={styles.socials}>
            <Link
              href={
                "https://www.figma.com/design/FPINtnyLxe5zzOkSM0Vgnc/Hackathonamatata-Template?node-id=7-2&t=IcSVTpttsLCb4fQk-1"
              }
              title="figma"
            >
              <RxFigmaLogo fontSize={32} />
            </Link>
            <Link
              href={"https://github.com/PatrickDniz/Hackthonamatata"}
              title="Github"
            >
              <VscGithubInverted fontSize={32} />
            </Link>
            <Link
              href={"https://github.com/LuizHenrique05/Hackthonamatata-api"}
              title="Github Api"
            >
              <HiOutlineDatabase fontSize={32} />
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1t-ES521YDvifpKnQrOWeE7r8v_tL7Xoc/view?usp=sharing"
              }
              title="Documentacao"
            >
              <MdOutlineContentPaste fontSize={32} />
            </Link>
          </div>
        </div>
        <hr className={styles.bar} />
        <div className={styles.footerBottom}>
          <span className={styles.copy}>
            ©2024 Hackathonamatata. All rights reserved
          </span>
          <span className={styles.copy}>
            Desenvolvido por: Caio Ferreira | Patrick Diniz | Luiz Simba
          </span>
        </div>
      </div>
    </footer>
  );
}
