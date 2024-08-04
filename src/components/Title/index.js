import styles from "./style.module.css";

export default function Title({data}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{data.title}</h2>
      <h3 className={styles.subTitle}>{data.subTitle}</h3>
    </section>
  );
}
