import styles from "./page.module.css"
import DynamicInput from "../../components/DynamicInput"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <section className={styles.layout}>
        <section className={styles.banner_layout}>
          <Image 
            className={styles.banner}
            src="/seja-um-voluntario.png" 
            alt="Banner seja um voluntario" 
            title="Banner seja um voluntario"
            width={1250}
            height={400}
          />
        </section>
        <h1 className={styles.headline}>Seja um Voluntário</h1>
        <p className={styles.text}>
        Ser voluntário na luta contra crises climáticas é essencial porque suas ações ajudam a mitigar os impactos devastadores das mudanças climáticas em nosso planeta. Ao se envolver, você contribui para a conservação de recursos, a proteção de ecossistemas e a promoção de práticas sustentáveis. Cada esforço conta na construção de um futuro mais seguro e saudável para todos. Sua participação não apenas apoia iniciativas vitais, mas também inspira outros a agir, amplificando o impacto positivo em nossa comunidade e no mundo.
        </p>
        <form className={styles.form} action="/" method="post">
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Cadastre-se como um voluntário e ajude a milhares de pessoas!</legend>

            <DynamicInput 
              label="Nome" 
              name="name" 
              id="name" 
              pattern="^[a-zA-Z\s]*$"
              type="text"
              placeholder="Informe seu nome completo"
            />
            
            <DynamicInput 
              label="Email" 
              name="email" 
              id="email" 
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              type="text"
              placeholder="Informe seu e-mail"
            />

            <DynamicInput 
              label="Telefone" 
              name="contact_phone" 
              id="contact_phone" 
              pattern="^\(\d{2}\) \d{5}-\d{4}$"
              type="tel"
              placeholder="Informe seu telefone: (12) 12345-0234"
            />

            <DynamicInput 
              label="Documento" 
              name="document" 
              id="document" 
              pattern="^[a-zA-Z0-9]*$"
              type="text"
              placeholder="Informe seu documento de identificação (CPF, CNPJ ou Passaporte)"
            />

            <DynamicInput 
              label="Tipo do Documento" 
              name="document_type" 
              id="document_type" 
              pattern="^[a-zA-Z\s]*$"
              type="text"
              placeholder="Informe o tipo de documento. Tipos: CPF, CNPJ ou Passaporte"
            />

            <DynamicInput 
              label="Seu Endereço" 
              name="address" 
              id="address" 
              pattern="^[a-zA-Z0-9\s]*$"
              type="text"
              placeholder="Informe o seu endereço"
            />

            <DynamicInput 
              label="Seu Gênero" 
              name="gender" 
              id="gender" 
              pattern="^[a-zA-Z\s]*$"
              type="text"
              placeholder="Informe o seu gênero ou escreva: Prefiro não informar"
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
