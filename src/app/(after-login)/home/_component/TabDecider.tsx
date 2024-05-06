'use client'

import React, { useContext } from 'react'
import FollowingPosts from '@/app/(after-login)/home/_component/FollowingPosts'
import PostRecommends from '@/app/(after-login)/home/_component/PostRecommends'
import { TabContext } from '@/app/(after-login)/home/_component/TabProvider'

const TabDecider = () => {
  const { tab } = useContext(TabContext)
  if (tab === 'rec') {
    return <PostRecommends />
  }
  return <FollowingPosts />
}
export default TabDecider
