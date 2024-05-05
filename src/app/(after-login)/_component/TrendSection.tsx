'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import Trend from '@/app/(after-login)/_component/Trend'
import styles from '@/app/(after-login)/_component/trend-section.module.css'

const TrendSection = () => {
  const pathname = usePathname()
  if (pathname === '/explore') return null
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
export default TrendSection
