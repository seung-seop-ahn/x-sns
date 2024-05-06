import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'
import React from 'react'
import ActionButtons from '@/app/(after-login)/_component/ActionButtons'
import PostArticle from '@/app/(after-login)/_component/PostArticle'
import PostImages from '@/app/(after-login)/_component/PostImages'
import styles from '@/app/(after-login)/_component/post.module.css'
import { Post as IPost } from '@/model/Post'

dayjs.extend(relativeTime)

type Props = {
  noImage?: boolean
  post: IPost
}

const Post = ({ noImage, post }: Props) => {
  const target = post

  return (
    <PostArticle post={target}>
      <div className={styles.postWrapper}>
        <div className={styles.postUserSection}>
          <Link href={`/${target.User.id}`} className={styles.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={styles.postShade} />
          </Link>
        </div>
        <div className={styles.postBody}>
          <div className={styles.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={styles.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={styles.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={styles.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          <div>
            <PostImages post={target} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  )
}
export default Post
