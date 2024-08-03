import Image from "next/image";
import styles from "./style.module.css";

export default function ItemCampaign({ data }) {
  const {
    id,
    name,
    small_description,
    image,
    tag
  } = data;  
  
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}> 
        <Image 
          src={image} 
          alt={name} 
          width={240}
          height={240}
        />
        <span className={styles.tag}>{tag}</span>
      </div>
      <div className={styles.cardInfo}>
        <h3>{name}</h3>
        <div>{small_description}</div>
        <button>Ajude !</button>
      </div>
    </div>
  );
}
