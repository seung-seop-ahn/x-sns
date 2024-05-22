import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'
import UserInfo from '@/app/(after-login)/[username]/_component/UserInfo'
import UserPosts from '@/app/(after-login)/[username]/_component/UserPosts'
import { getUser } from '@/app/(after-login)/[username]/_lib/getUser'
import { getUserPosts } from '@/app/(after-login)/[username]/_lib/getUserPosts'
import styles from '@/app/(after-login)/[username]/profile.module.css'

type Props = {
  params: { username: string }
}

const Page = async ({ params }: Props) => {
  const { username } = params
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({ queryKey: ['users', username], queryFn: getUser })
  await queryClient.prefetchQuery({ queryKey: ['posts', 'users', username], queryFn: getUserPosts })
  const dehydratedState = dehydrate(queryClient)

  return (
    <main className={styles.main}>
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  )
}
export default Page
