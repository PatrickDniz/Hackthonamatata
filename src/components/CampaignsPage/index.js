import styles from "./style.module.css";
import Image from "next/image";

export default function CampaignsPage({ data }) {
  const {
    name,
    small_description,
    image,
    tag,
    contact_phone,
    address,
    complete_description,
    volunteer_call,
    donation_text
  } = data;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{name}</h1>
      <h3 className={styles.subTitle}>{small_description}</h3>

      <div className={styles.card}>
        <Image src={image} alt={name} width={620} height={620} />
        <div className={styles.infos}>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.description} dangerouslySetInnerHTML={{__html: complete_description}}/>
          <hr className={styles.bar} />
          {volunteer_call && (
            <>
              <p className={styles.volunteer}>{volunteer_call}</p>
              <hr className={styles.bar} />
            </>
          )}
          {contact_phone && (
            <div className={styles.infoItem}>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6665 7.16667H25.3332V25.8333H21.3332L21.3332 11.1667H6.6665V7.16667Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3332 25.8333C17.0151 25.8333 19.9998 22.8486 19.9998 19.1667C19.9998 15.4848 17.0151 12.5 13.3332 12.5C9.65127 12.5 6.6665 15.4848 6.6665 19.1667C6.6665 22.8486 9.65127 25.8333 13.3332 25.8333ZM13.3332 21.8333C14.8059 21.8333 15.9998 20.6394 15.9998 19.1667C15.9998 17.6939 14.8059 16.5 13.3332 16.5C11.8604 16.5 10.6665 17.6939 10.6665 19.1667C10.6665 20.6394 11.8604 21.8333 13.3332 21.8333Z" fill="currentColor"/>
              </svg>
              <div>
                <strong>Contato</strong>
                <p>{contact_phone}</p>
              </div>
            </div>
          )}
          {address && (
            <div className={styles.infoItem}>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6665 7.16667H25.3332V25.8333H21.3332L21.3332 11.1667H6.6665V7.16667Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3332 25.8333C17.0151 25.8333 19.9998 22.8486 19.9998 19.1667C19.9998 15.4848 17.0151 12.5 13.3332 12.5C9.65127 12.5 6.6665 15.4848 6.6665 19.1667C6.6665 22.8486 9.65127 25.8333 13.3332 25.8333ZM13.3332 21.8333C14.8059 21.8333 15.9998 20.6394 15.9998 19.1667C15.9998 17.6939 14.8059 16.5 13.3332 16.5C11.8604 16.5 10.6665 17.6939 10.6665 19.1667C10.6665 20.6394 11.8604 21.8333 13.3332 21.8333Z" fill="currentColor"/>
              </svg>
              <div>
                <strong>Endereço</strong>
                <p>{address}</p>
              </div>
            </div>
          )}
          {donation_text && (
            <div className={styles.infoItem}>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6665 7.16667H25.3332V25.8333H21.3332L21.3332 11.1667H6.6665V7.16667Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3332 25.8333C17.0151 25.8333 19.9998 22.8486 19.9998 19.1667C19.9998 15.4848 17.0151 12.5 13.3332 12.5C9.65127 12.5 6.6665 15.4848 6.6665 19.1667C6.6665 22.8486 9.65127 25.8333 13.3332 25.8333ZM13.3332 21.8333C14.8059 21.8333 15.9998 20.6394 15.9998 19.1667C15.9998 17.6939 14.8059 16.5 13.3332 16.5C11.8604 16.5 10.6665 17.6939 10.6665 19.1667C10.6665 20.6394 11.8604 21.8333 13.3332 21.8333Z" fill="currentColor"/>
              </svg>
              <div>
                <strong>Doe Aqui</strong>
                <p>{donation_text}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
