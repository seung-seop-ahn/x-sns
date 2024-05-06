'use client'

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Post from '@/app/(after-login)/_component/Post'
import { getSearchResult } from '@/app/(after-login)/search/_lib/getSearchResult'
import { Post as IPost } from '@/model/Post'

type Props = {
  searchParams: { q: string; f?: string; pf?: string }
}

const SearchResult = ({ searchParams }: Props) => {
  const { data } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, Props['searchParams']]
  >({
    queryKey: ['posts', 'search', searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000, // fresh -> stale, 5 min.
    gcTime: 300 * 1000,
  })

  return data?.map((post) => <Post key={post.postId} post={post} />)
}
export default SearchResult
