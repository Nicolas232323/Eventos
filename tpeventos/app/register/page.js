'use client'

import Link from 'next/link'
import styles from './page.module.css'

export default function Register() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Crear Cuenta</h1>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGroup}>
          <label htmlFor="nombre" className={styles.label}>Nombre completo</label>
          <input
            type="text"
            id="nombre"
            className={styles.input}
            placeholder="Juan Pérez"
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
          <label htmlFor="password" className={styles.label}>Contraseña</label>
          <input
            type="password"
            id="password"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Registrarse
        </button>
      </form>
      <div className={styles.loginLink}>
        <span className={styles.loginText}>¿Ya tienes una cuenta?</span>
        <Link href="/login" className={styles.loginButton}>
          Inicia sesión
        </Link>
      </div>
    </div>
  )
}