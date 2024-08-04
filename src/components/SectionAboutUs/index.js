import { aboutUs } from "@/constants/aboutUs";
import styles from "./style.module.css";
import Image from "next/image";

export default function SectionAboutUs() {
  const { title, cards } = aboutUs;
  
  return (
    <section className={styles.section}>
      <h2 className={styles.title} dangerouslySetInnerHTML={{__html: title}} />
      <div className={styles.list}>
        {cards && cards.map(({image, title, subTitle}) => (
          <div key={title} className={styles.card}>
            <Image src={image} alt={title} width={64} height={64}/>
            <h3>{title}</h3>
            <h4 dangerouslySetInnerHTML={{__html: subTitle}} />
          </div>
        ))}
      </div>
    </section>
  );
}
