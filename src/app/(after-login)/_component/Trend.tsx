import Link from 'next/link'
import React from 'react'
import styles from '@/app/(after-login)/_component/trend.module.css'
import { Hashtag } from '@/model/Hashtag'

type Prop = { trend: Hashtag }

const Trend = ({ trend }: Prop) => {
  return (
    <Link href={`/search?q=${trend.title}`} className={styles.container}>
      <div className={styles.count}>Realtime Trend</div>
      <div className={styles.title}>{trend.title}</div>
      <div className={styles.count}>{trend.count.toLocaleString()} posts</div>
    </Link>
  )
}
export default Trend
