'use client'

import styles from './page.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contacto</h1>
      <p className={styles.subtitle}>¿Tienes alguna pregunta? Estamos aquí para ayudarte.</p>
      
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h2 className={styles.infoTitle}>Información de contacto</h2>
          <div className={styles.infoItem}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className={styles.text}>+54 11 1234-5678</span>
          </div>
          <div className={styles.infoItem}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className={styles.text}>contacto@eventosapp.com</span>
          </div>
          <div className={styles.infoItem}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className={styles.text}>Av. Corrientes 1234, CABA, Argentina</span>
          </div>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label htmlFor="nombre" className={styles.label}>Nombre</label>
            <input
              type="text"
              id="nombre"
              className={styles.input}
              placeholder="Tu nombre"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="tu@email.com"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mensaje" className={styles.label}>Mensaje</label>
            <textarea
              id="mensaje"
              className={styles.textarea}
              placeholder="¿En qué podemos ayudarte?"
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  )
}