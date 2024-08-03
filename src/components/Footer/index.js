import styles from "./style.module.css";
import Logo from "@/components/Logo";

export default function Footer({ data }) {
 
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <Logo />
        <span className={styles.copy}>Desenvolvido por equipe <strong>Hackthonamatata</strong></span> 
      </div>
    </footer>
  );
}
