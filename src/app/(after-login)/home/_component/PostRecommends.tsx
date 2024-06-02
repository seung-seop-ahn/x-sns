'use client'

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import React, { Fragment, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Post from '@/app/(after-login)/_component/Post'
import { getPostRecommends } from '@/app/(after-login)/home/_lib/getPostRecommends'
import styles from '@/app/(after-login)/home/home.module.css'
import { Post as IPost } from '@/model/Post'

const PostRecommends = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isPending,
    isLoading, // isPending && isFetching
    isError,
  } = useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string], number>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    initialPageParam: 0, // [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]]
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId, // 5 / 10 / 15
    staleTime: 60 * 1000, // default 0
    gcTime: 300 * 1000, // default 5 min (gcTime > staleTime)
  })
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  })

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage()
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage])

  if (isPending) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg className={styles.loader} height="100%" viewBox="0 0 32 32" width={40}>
          <circle
            cx="16"
            cy="16"
            fill="none"
            r="14"
            strokeWidth="4"
            style={{ stroke: 'rgb(29, 155, 240)', opacity: 0.2 }}
          ></circle>
          <circle
            cx="16"
            cy="16"
            fill="none"
            r="14"
            strokeWidth="4"
            style={{ stroke: 'rgb(29, 155, 240)', strokeDasharray: 80, strokeDashoffset: 60 }}
          ></circle>
        </svg>
      </div>
    )
  }

  if (isError) {
    return 'Error'
  }

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 50 }} />
    </>
  )
}
export default PostRecommends
