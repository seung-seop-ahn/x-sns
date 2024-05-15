'use client'

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Trend from '@/app/(after-login)/_component/Trend'
import { getTrends } from '@/app/(after-login)/_lib/getTrends'
import { Hashtag } from '@/model/Hashtag'

const TrendSection = () => {
  const { data } = useQuery<Hashtag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })

  return data?.map((trend) => <Trend key={trend.tagId} trend={trend} />)
}
export default TrendSection
