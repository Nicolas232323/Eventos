'use client'

import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Iniciar Sesión</h1>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
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
          <label htmlFor="password" className={styles.label}>Contraseña</label>
          <input
            type="password"
            id="password"
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}