import React from 'react'
import CommentForm from '@/app/(after-login)/[username]/status/[id]/_component/CommentForm'
import styles from '@/app/(after-login)/[username]/status/[id]/post-detail.module.css'
import BackButton from '@/app/(after-login)/_component/BackButton'
import Post from '@/app/(after-login)/_component/Post'

const Page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <BackButton />
        <h3 className={styles.headerTitle}>Post</h3>
      </div>
      <Post />
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
export default Page
