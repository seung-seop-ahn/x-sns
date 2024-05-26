import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'
import CommentForm from '@/app/(after-login)/[username]/status/[id]/_component/CommentForm'
import Comments from '@/app/(after-login)/[username]/status/[id]/_component/Comments'
import SinglePost from '@/app/(after-login)/[username]/status/[id]/_component/SinglePost'
import { getComments } from '@/app/(after-login)/[username]/status/[id]/_lib/getComments'
import { getSinglePost } from '@/app/(after-login)/[username]/status/[id]/_lib/getSinglePost'
import styles from '@/app/(after-login)/[username]/status/[id]/post-detail.module.css'
import BackButton from '@/app/(after-login)/_component/BackButton'
import Post from '@/app/(after-login)/_component/Post'

type Props = {
  params: { id: string }
}

const Page = async ({ params }: Props) => {
  const { id } = params
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({ queryKey: ['posts', id], queryFn: getSinglePost })
  await queryClient.prefetchQuery({ queryKey: ['posts', id, 'comments'], queryFn: getComments })
  const dehydratedState = dehydrate(queryClient)

  return (
    <div className={styles.main}>
      <HydrationBoundary state={dehydratedState}>
        <div className={styles.header}>
          <BackButton />
          <h3 className={styles.headerTitle}>Post</h3>
        </div>
        <SinglePost id={id} />
        <CommentForm id={id} />
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  )
}
export default Page
