'use client'

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import styles from '@/app/(after-login)/@modal/[username]/status/[id]/photo/[photoId]/photo-modal.module.css'
import { getSinglePost } from '@/app/(after-login)/[username]/status/[id]/_lib/getSinglePost'
import ActionButtons from '@/app/(after-login)/_component/ActionButtons'
import { Post as IPost } from '@/model/Post'

type Props = {
  id: string
}

const ImageZone = ({ id }: Props) => {
  const { data: post, error } = useQuery<IPost, Object, IPost, [_1: string, _2: string]>({
    queryKey: ['posts', id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })

  if (!post?.Images[0]) {
    return null
  }
  return (
    <div className={styles.imageZone}>
      <img src={post.Images[0].link} alt={post.content} />
      <div className={styles.image} style={{ backgroundImage: `url(${post.Images[0].link})` }} />
      <div className={styles.buttonZone}>
        <div className={styles.buttonInner}>
          <ActionButtons white />
        </div>
      </div>
    </div>
  )
}
export default ImageZone
