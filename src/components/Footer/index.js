import styles from "./style.module.css";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerTop}>
          <Logo>B R A Z A</Logo>
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
