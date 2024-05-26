import { faker } from '@faker-js/faker'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'
import ImageZone from '@/app/(after-login)/@modal/[username]/status/[id]/photo/[photoId]/_component/ImageZone'
import PhotoModalCloseButton from '@/app/(after-login)/@modal/[username]/status/[id]/photo/[photoId]/_component/PhotoModalCloseButton'
import styles from '@/app/(after-login)/@modal/[username]/status/[id]/photo/[photoId]/photo-modal.module.css'
import CommentForm from '@/app/(after-login)/[username]/status/[id]/_component/CommentForm'
import Comments from '@/app/(after-login)/[username]/status/[id]/_component/Comments'
import SinglePost from '@/app/(after-login)/[username]/status/[id]/_component/SinglePost'
import { getComments } from '@/app/(after-login)/[username]/status/[id]/_lib/getComments'
import { getSinglePost } from '@/app/(after-login)/[username]/status/[id]/_lib/getSinglePost'
import ActionButtons from '@/app/(after-login)/_component/ActionButtons'
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

  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  }
  return (
    <div className={styles.container}>
      <HydrationBoundary state={dehydratedState}>
        <PhotoModalCloseButton />
        <ImageZone id={id} />
        <div className={styles.commentZone}>
          <SinglePost id={id} noImage />
          <CommentForm id={id} />
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  )
}
export default Page
