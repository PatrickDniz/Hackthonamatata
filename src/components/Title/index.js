import styles from "./style.module.css";

export default function Title({data}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{data}</h2>
    </section>
  );
}
