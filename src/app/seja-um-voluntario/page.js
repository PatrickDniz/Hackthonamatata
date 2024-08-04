'use client'

import styles from './page.module.css'
import DynamicInput from '../../components/DynamicInput'
import { handleSubmit } from '/src/utils/formHandler'
import { useState } from 'react'

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact_phone: '',
    document: '',
    document_type: '',
    address: '',
    gender: ''
  })

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <section className={styles.layout}>
        <h1 className={styles.headline}>Seja a mudança que você quer ver no mundo! Seja um Voluntário.</h1>
        <p className={styles.text}>
          Ser voluntário na luta contra crises climáticas é essencial porque suas ações ajudam a mitigar os impactos devastadores das mudanças climáticas em nosso planeta. Ao se envolver, você contribui para a conservação de recursos, a proteção de ecossistemas e a promoção de práticas sustentáveis. Cada esforço conta na construção de um futuro mais seguro e saudável para todos. Sua participação não apenas apoia iniciativas vitais, mas também inspira outros a agir, amplificando o impacto positivo em nossa comunidade e no mundo.
        </p>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e, formData)}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Apoie nossa causa e ajude a transformar vidas.</legend>

            <DynamicInput 
              label="Nome" 
              name="name" 
              id="name" 
              pattern="^[a-zA-Z\u00C0-\u00FF\s]*$"
              type="text"
              placeholder="Informe seu nome completo"
              value={formData.name}
              onChange={onChange}
            />
            
            <DynamicInput 
              label="Email" 
              name="email" 
              id="email" 
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              type="text"
              placeholder="Informe seu e-mail"
              value={formData.email}
              onChange={onChange}
            />

            <DynamicInput 
              label="Telefone" 
              name="contact_phone" 
              id="contact_phone" 
              pattern="^\(\d{2}\) \d{5}-\d{4}$"
              type="tel"
              placeholder="Informe seu telefone: (12) 12345-0234"
              value={formData.contact_phone}
              onChange={onChange}
            />

            <DynamicInput 
              label="Documento" 
              name="document" 
              id="document" 
              pattern="^[a-zA-Z0-9]*$"
              type="text"
              placeholder="Informe seu documento de identificação (CPF, CNPJ ou Passaporte)"
              value={formData.document}
              onChange={onChange}
            />

            <DynamicInput 
              label="Tipo do Documento" 
              name="document_type" 
              id="document_type" 
              pattern="^[a-zA-Z\u00C0-\u00FF\s]*$"
              type="text"
              placeholder="Informe o tipo de documento. Tipos: CPF, CNPJ ou Passaporte"
              value={formData.document_type}
              onChange={onChange}
            />

            <DynamicInput 
              label="Seu Endereço" 
              name="address" 
              id="address" 
              type="text"
              placeholder="Informe o seu endereço"
              value={formData.address}
              onChange={onChange}
            />
            
            <button 
                className={styles.button} 
                type="submit"
            >
              Seja um voluntário
            </button>
          </fieldset>
        </form>
      </section>
    </>
  )
}
