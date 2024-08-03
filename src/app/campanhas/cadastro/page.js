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
            src="/crise-climatica.png" 
            alt="Banner contra crise climatica" 
            title="Banner contra crise climatica"
            width={1250}
            height={400}
          />
        </section>
        <h1 className={styles.headline}>Cadastre sua Campanha</h1>
        <p className={styles.text}>
          Cadastre sua campanha para arrecadação, auxílio e contribuição contra crises climáticas! Contribua para um futuro mais sustentável e ajude a enfrentar os desafios das mudanças climáticas. Sua iniciativa pode fazer a diferença!
        </p>
        <form className={styles.form} action="/" method="post">
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Cadastre-se sua campanha e ajude a milhares de pessoas!</legend>

            <DynamicInput 
              label="Nome" 
              name="name" 
              id="name" 
              pattern="^[a-zA-Z\s]*$"
              type="text"
              placeholder="Informe o nome da sua campanha"
            />

            <div>
              <label className={styles.label} htmlFor="small_description">Descrição Pequena da Campanha:</label>
              <textarea className={styles.textarea}
                id="small_description" 
                name="small_description" 
                rows="3" 
                placeholder="Informe uma descrição pequena para sua campanha"
                required
                area-required="true"
              >
              </textarea>
            </div>

            <DynamicInput 
              label="Imagem" 
              name="image" 
              id="image" 
              pattern="^[a-zA-Z0-9]*$"
              type="text"
              placeholder="Informe o link para imagem de sua campanha"
            />

            <DynamicInput 
              label="Tag Principal" 
              name="tag" 
              id="tag" 
              pattern="^[a-zA-Z\s]*$"
              type="text"
              placeholder="Informe uma tag para aparecer em sua campanha"
            />

            <DynamicInput 
              label="Telefone de Contato" 
              name="contact_phone" 
              id="contact_phone" 
              pattern="^\(\d{2}\) \d{5}-\d{4}$"
              type="tel"
              placeholder="Informe seu telefone: (12) 12345-0234"
            />

            <DynamicInput 
              label="Endereço da Sede de sua Campanha" 
              name="address" 
              id="address" 
              pattern="^[a-zA-Z0-9\s]*$"
              type="text"
              placeholder="Informe o endereço da sede de sua campanha"
            />

            <div>
              <label className={styles.label} htmlFor="complete_description">Descrição Completa da Campanha:</label>
              <textarea className={styles.textarea}
                id="complete_description" 
                name="complete_description" 
                rows="4" 
                placeholder="Informe a descrição completa da sua campanha"
                required
                area-required="true"
              >
              </textarea>
            </div>

            <DynamicInput 
              label="Crie um Texto Chamando Voluntários" 
              name="volunteer_call" 
              id="volunteer_call" 
              pattern="^[a-zA-Z\s]*$"
              type="text"
              placeholder="Informe o texto de chamado de voluntários"
            />

            <DynamicInput 
              label="Crie um Texto Solicitando Doações" 
              name="donation_text" 
              id="donation_text" 
              pattern="^[a-zA-Z\s]*$"
              type="text"
              placeholder="Informe o texto para solicitar doações"
            />
            
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
