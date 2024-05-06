import { faker } from '@faker-js/faker'
import React from 'react'
import PhotoModalCloseButton from '@/app/(after-login)/@modal/[username]/status/[id]/photo/[photoId]/_component/PhotoModalCloseButton'
import styles from '@/app/(after-login)/@modal/[username]/status/[id]/photo/[photoId]/photo-modal.module.css'
import CommentForm from '@/app/(after-login)/[username]/status/[id]/_component/CommentForm'
import ActionButtons from '@/app/(after-login)/_component/ActionButtons'
import Post from '@/app/(after-login)/_component/Post'

const Page = () => {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  }
  return (
    <div className={styles.container}>
      <PhotoModalCloseButton />
      <div className={styles.imageZone}>
        <img src={photo.link} alt={photo.Post?.content} />
        <div className={styles.image} style={{ backgroundImage: `url(${photo.link})` }} />
        <div className={styles.buttonZone}>
          <div className={styles.buttonInner}>
            <ActionButtons white />
          </div>
        </div>
      </div>
      <div className={styles.commentZone}>
        <Post noImage />
        <CommentForm />
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
