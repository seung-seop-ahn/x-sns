'use client'

import { useQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import React from 'react'
import Trend from '@/app/(after-login)/_component/Trend'
import styles from '@/app/(after-login)/_component/trend-section.module.css'
import { getTrends } from '@/app/(after-login)/_lib/getTrends'
import { Hashtag } from '@/model/Hashtag'

const TrendSection = () => {
  const pathname = usePathname()
  const { data: session } = useSession()
  const { data } = useQuery<Hashtag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!session?.user, // only runs when user is logged in
  })

  if (pathname === '/explore') return null
  if (session?.user) {
    return (
      <div className={styles.trendBg}>
        <div className={styles.trend}>
          <h3>Trends for you</h3>
          {data?.map((trend) => (
            <Trend key={trend.tagId} trend={trend} />
          ))}
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
