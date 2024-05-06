'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import styles from '@/app/(after-login)/_component/post.module.css'

type Props = {
  children: React.ReactNode
  post: {
    postId: number
    User: {
      id: string
      nickname: string
      image: string
    }
    content: string
    createdAt: Date
    Images: {
      imageId: number
      link: string
    }[]
  }
}

const PostArticle = ({ children, post }: Props) => {
  const router = useRouter()
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`)
  }

  return (
    <article onClickCapture={onClick} className={styles.post}>
      {children}
    </article>
  )
}
export default PostArticle
