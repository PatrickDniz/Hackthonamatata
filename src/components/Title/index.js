import styles from "./style.module.css";

export default function Title({data}) {
  return (
    <section className="">
      <h2 className={styles.title}>{data}</h2>
    </section>
  );
}
