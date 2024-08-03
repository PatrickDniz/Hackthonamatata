import { aboutUs } from "@/constants/aboutUs";
import styles from "./style.module.css";
import Image from "next/image";

export default function SectionAboutUs() {
  const { title, subTitle, cards } = aboutUs;
  
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subTitle}>{subTitle}</p>
      <div className={styles.list}>
        {cards && cards.map(({image, title}) => (
          <div key={title} className={styles.card}>
            <Image src={image} alt={title} width={240} height={240}/>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
