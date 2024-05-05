import Link from 'next/link'
import React from 'react'
import styles from '@/app/(after-login)/_component/trend.module.css'

const Trend = () => {
  return (
    <Link href={`/search?q=trend`} className={styles.container}>
      <div className={styles.count}>Realtime Trend</div>
      <div className={styles.title}>Kevin Ahn</div>
      <div className={styles.count}>1,234 posts</div>
    </Link>
  )
}
export default Trend
