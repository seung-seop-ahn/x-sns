'use client'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { getComments } from '@/app/(after-login)/[username]/status/[id]/_lib/getComments'
import Post from '@/app/(after-login)/_component/Post'
import { Post as IPost } from '@/model/Post'

type Props = {
  id: string
}

const Comments = ({ id }: Props) => {
  const queryClient = useQueryClient()
  const post = queryClient.getQueryData(['posts', id])
  const { data, error } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, _3: string]>({
    queryKey: ['posts', id, 'comments'],
    queryFn: getComments,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!post,
  })
  if (post) {
    return data?.map((post) => <Post post={post} key={post.postId} />)
  }
  return null
}
export default Comments
