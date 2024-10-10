'use client'

import Link from 'next/link'
import UserMenu from './UserMenu'
import styles from './Header.module.css'

export default function Header() {
  const isLoggedIn = true
  const username = "Juan Pérez"

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </nav>
          
          {isLoggedIn ? (
            <UserMenu username={username} />
          ) : (
            <div className={styles.authButtons}>
              <Link href="/login" className={styles.loginButton}>Iniciar Sesión</Link>
              <Link href="/register" className={styles.registerButton}>
                Registrarse
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}