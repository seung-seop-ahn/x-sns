'use client'

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Post from '@/app/(after-login)/_component/Post'
import { getFollowingPosts } from '@/app/(after-login)/home/_lib/getFollowingPosts'
import { Post as IPost } from '@/model/Post'

const FollowingPosts = () => {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, // default 0
    gcTime: 300 * 1000, // default 5 min (gcTime > staleTime)
    initialData: () => [],
  })
  return data?.map((post) => <Post key={post.postId} post={post} />)
}
export default FollowingPosts
