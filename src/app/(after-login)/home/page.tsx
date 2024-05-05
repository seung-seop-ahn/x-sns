import React from 'react'
import Tab from './_component/Tab'
import Post from '@/app/(after-login)/_component/Post'
import PostForm from '@/app/(after-login)/home/_component/PostForm'
import TabProvider from '@/app/(after-login)/home/_component/TabProvider'
import styles from '@/app/(after-login)/home/home.module.css'

const Home = () => {
  return (
    <main className={styles.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  )
}
export default Home
