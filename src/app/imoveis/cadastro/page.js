'use client'

import styles from './page.module.css'
import DynamicInput from '../../../components/DynamicInput'
import Image from 'next/image'
import { handleSubmit } from '/src/utils/formHandler'
import { useState } from 'react'

export default function Page() {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    address: '',
    description: ''
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
        <form className={styles.form} onSubmit={(e) => handleSubmit(e, formData)}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Cadastre-se seu imóvel e ajude a milhares de pessoas!</legend>

            <DynamicInput 
              label="Título do Imóvel" 
              name="title" 
              id="title" 
              pattern="^[a-zA-Z\u00C0-\u00FF\s]*$"
              type="text"
              placeholder="Informe um título para seu imóvel"
              onChange={onChange}
              value={formData.title}
            />

            <DynamicInput 
              label="Imagem do Imóvel" 
              name="image" 
              id="image" 
              pattern="^[^\s]+$"
              type="text"
              placeholder="Informe o link para imagem de seu imóvel"
              onChange={onChange}
              value={formData.image}
            />

            <DynamicInput 
              label="Endereço do Imóvel" 
              name="address" 
              id="address" 
              type="text"
              placeholder="Informe o endereço de seu imóvel"
              onChange={onChange}
              value={formData.address}
            />

            <div>
              <label className={styles.label} htmlFor="description">Descrição do Imóvel:</label>
              <textarea className={styles.textarea}
                id="description" 
                name="description" 
                rows="4" 
                placeholder="Informe as específicações do imóvel"
                required
                area-required="true"
                onChange={onChange}
                value={formData.description}
              />
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
