import Image from "next/image";
import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBar}>
        <h1 className={styles.title}>Login</h1>
        <span className={styles.subTitle}>
          Página em Implementaçao
        </span>
      </div>
      <div className={styles.list}>
        <div className={styles.card}>
          <Image
            src={"/icons/login_01.svg"}
            alt="Icone de uma cada"
            width={48}
            height={60}
          />
          <strong>
            Realizando o login como uma ONG ou instituiçao Parceira
          </strong>
          <span>será possivel cadastrar campanhas através da plataforma.</span>
        </div>
        <div className={styles.card}>
          <Image
            src={"/icons/login_02.svg"}
            alt="Icone de um celular"
            width={38}
            height={60}
          />
          <strong>
            Realizando o login como uma ONG ou instituiçao Parceira
          </strong>
          <span>
            poderá verificar os voluntários cadastrados na plataforma, realizar
            treinamentos e verificar imoveis disponibilizados para serem
            utilizados de abrigos em momentos de crise.
          </span>
        </div>
        <div className={styles.card}>
          <Image
            src={"/icons/login_03.svg"}
            alt="Icone de uma pessoa"
            width={60}
            height={60}
          />
          <strong>Realizando o login como um Voluntário(a)</strong>
          <span>
            terá acesso aos treinamentos e poderá receber uma mensagem ou email
            de uma ONG solicitando auxilio em sua região.
          </span>
        </div>
      </div>
    </div>
  );
}
