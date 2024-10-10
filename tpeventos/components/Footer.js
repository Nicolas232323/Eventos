import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>&copy; 2024 EventosApp. Todos los derechos reservados.</p>
          <div className={styles.links}>
            <a href="#" className={styles.link}>Términos</a>
            <a href="#" className={styles.link}>Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}