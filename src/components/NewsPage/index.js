import styles from "./style.module.css";
import Image from "next/image";

export default function NewsPage({ data }) {
  const {
    title,
    small_description,
    image,
    complete_description,
  } = data;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1> 
      <h3 className={styles.subTitle}>{small_description}</h3>

      <div className={styles.card}>
        <Image src={image} alt={title} width={620} height={620} />
        <div className={styles.infos}>
          <p className={styles.description} dangerouslySetInnerHTML={{__html: complete_description}}/>
        </div>
      </div>
    </div>
  );
}
