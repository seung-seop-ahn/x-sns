'use client'

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import FollowRecommend from '@/app/(after-login)/_component/FollowRecommend'
import { getFollowRecommends } from '@/app/(after-login)/_lib/getFollowRecommends'
import { User } from '@/model/User'

const FollowRecommendSection = () => {
  const { data } = useQuery<User[]>({
    queryKey: ['users', 'followRecommends'],
    queryFn: getFollowRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })

  return data?.map((user) => <FollowRecommend key={user.id} user={user} />)
}
export default FollowRecommendSection
