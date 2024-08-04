import styles from "./page.module.css";
import { GoGear } from "react-icons/go";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBar}>
        <GoGear fontSize={39} />
        <h1 className={styles.title}>
          Página em <strong>Implementaçao</strong>
        </h1>
      </div>
      <div className={styles.list}>
        <div className={styles.card}>
          <span>
            Realizando o login como uma <strong>ONG</strong> ou
            <strong> instituiçao Parceira</strong> será possivel cadastrar
            campanhas através da plataforma.
          </span>
        </div>
        <div className={styles.card}>
          <span>
            Realizando o login como uma <strong>ONG</strong> ou
            <strong> instituiçao Parceira</strong> poderá verificar os
            voluntários cadastrados na plataforma, realizar treinamentos e
            verificar imoveis disponibilizados para serem utilizados de abrigos
            em momentos de crise.
          </span>
        </div>
        <div className={styles.card}>
          <span>
            Realizando o login como um <strong>Voluntário(a)</strong> terá
            acesso aos treinamentos e poderá receber uma mensagem ou email de
            uma ONG solicitando auxilio em sua região.
          </span>
        </div>
      </div>
    </div>
  );
}
