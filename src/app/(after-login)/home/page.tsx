import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'
import Tab from './_component/Tab'
import PostForm from '@/app/(after-login)/home/_component/PostForm'
import TabDecider from '@/app/(after-login)/home/_component/TabDecider'
import TabProvider from '@/app/(after-login)/home/_component/TabProvider'
import { getPostRecommends } from '@/app/(after-login)/home/_lib/getPostRecommends'
import styles from '@/app/(after-login)/home/home.module.css'

const Home = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  })
  const dehydrateState = dehydrate(queryClient)

  return (
    <main className={styles.main}>
      <HydrationBoundary state={{ dehydrateState }}>
        <TabProvider>
          <Tab />
          <PostForm />
          <TabDecider />
        </TabProvider>
      </HydrationBoundary>
    </main>
  )
}
export default Home
