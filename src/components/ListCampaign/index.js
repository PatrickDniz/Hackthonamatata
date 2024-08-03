import ItemCampaign from "../ItemCampaign";
import styles from "./style.module.css";

export default function ListCampaign({ data }) {
  return (
    <section className={styles.section}>
      <div className={styles.list}>
        {data && data.map((item, index) =>  (
          <ItemCampaign key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
