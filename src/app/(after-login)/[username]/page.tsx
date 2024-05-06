import React from 'react'
import styles from '@/app/(after-login)/[username]/profile.module.css'
import BackButton from '@/app/(after-login)/_component/BackButton'
import Post from '@/app/(after-login)/_component/Post'

const Page = () => {
  const user = {
    id: 'seungseopahn',
    nickname: 'Kevin Ahn',
    image: '/profile.jpeg',
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <BackButton />
        <h3 className={styles.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={styles.userZone}>
        <div className={styles.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={styles.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={styles.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}
export default Page
