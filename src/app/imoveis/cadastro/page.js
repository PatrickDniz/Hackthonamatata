import styles from "./page.module.css"
import DynamicInput from "../../../components/DynamicInput"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <section className={styles.layout}>
        <section className={styles.banner_layout}>
          <Image 
            className={styles.banner}
            src="/cadastreseuimovel.png" 
            alt="Banner cadastre seu imóvel" 
            title="Banner cadastre seu imóvel"
            width={1250}
            height={400}
          />
        </section>
        <h1 className={styles.headline}>Cadastre seu Imóvel Disponível</h1>
        <p className={styles.text}>
          Ofereça abrigo para pessoas afetadas por desastres naturais. Se você tem um imóvel disponível que não esteja utilizando, sua contribuição pode fazer uma grande diferença. Cadastre seu imóvel e ajude a proporcionar segurança e apoio a quem precisa.
        </p>
        <form className={styles.form} action="/" method="post">
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Cadastre-se seu imóvel e ajude a milhares de pessoas!</legend>

            <DynamicInput 
              label="Título" 
              name="title" 
              id="title" 
              pattern="^[a-zA-Z0-9\s]*$"
              type="text"
              placeholder="Informe um título para seu imóvel"
            />

            <DynamicInput 
              label="Imagem" 
              name="image" 
              id="image" 
              pattern="^[a-zA-Z0-9]*$"
              type="text"
              placeholder="Informe o link para imagem de seu imóvel"
            />

            <DynamicInput 
              label="Seu Endereço" 
              name="address" 
              id="address" 
              pattern="^[a-zA-Z0-9\s]*$"
              type="text"
              placeholder="Informe o seu endereço"
            />

            <div>
              <label className={styles.label} htmlFor="description">Descrição do Imóvel:</label>
              <textarea className={styles.textarea}
                id="description" 
                name="description" 
                rows="4" 
                placeholder="Informe as específicações do imóvel">
              </textarea>
            </div>
            
            <button 
                className={styles.button} 
                type="submit"
            >
              Enviar
            </button>
          </fieldset>
        </form>
      </section>
    </>
  )
}
