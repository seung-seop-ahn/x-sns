'use client'

import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import React from 'react'
import Trend from '@/app/(after-login)/_component/Trend'
import styles from '@/app/(after-login)/_component/trend-section.module.css'

const TrendSection = () => {
  const pathname = usePathname()
  const { data } = useSession()

  if (pathname === '/explore') return null
  if (data?.user) {
    return (
      <div className={styles.trendBg}>
        <div className={styles.trend}>
          <h3>Trends for you</h3>
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
        </div>
      </div>
    )
  }
  return (
    <div className={styles.trendBg}>
      <div className={styles.noTrend}>
        <h3>Login required.</h3>
      </div>
    </div>
  )
}
export default TrendSection
