'use client'

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Post from '@/app/(after-login)/_component/Post'
import { getPostRecommends } from '@/app/(after-login)/home/_lib/getPostRecommends'
import { Post as IPost } from '@/model/Post'

const PostRecommends = () => {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000, // default 0
    gcTime: 300 * 1000, // default 5 min (gcTime > staleTime)
    initialData: () => [],
  })
  return data?.map((post) => <Post key={post.postId} post={post} />)
}
export default PostRecommends
