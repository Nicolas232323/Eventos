'use client'

import styles from './UserMenu.module.css'

export default function UserMenu({ username }) {
  return (
    <div className={styles.container}>
      <span className={styles.username}>{username}</span>
      <button 
        onClick={() => console.log('Cerrar sesión')} 
        className={styles.logoutButton}
      >
        Cerrar sesión
      </button>
    </div>
  )
}