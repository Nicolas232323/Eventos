'use client'

import Link from 'next/link'
import styles from './EventCard.module.css'

export default function EventCard({ event }) {
  return (
    <Link href={`/events/${event.id}`}>
      <div className={styles.card}>
        <img
          src={event.image}
          alt={event.title}
          className={styles.image}
        />
        <div className={styles.content}>
          <h2 className={styles.title}>{event.title}</h2>
          <p className={styles.date}>{event.date}</p>
          <p className={styles.location}>{event.location}</p>
        </div>
      </div>
    </Link>
  )
}