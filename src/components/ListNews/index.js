import ItemNews from "../ItemNews";
import styles from "./style.module.css";

export default function ListNews({ data }) {
  return (
    <section className={styles.section}>
      <div className={styles.list}>
        {data && data.map((item, index) =>  (
          <ItemNews key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
