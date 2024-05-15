'use client'

import React from 'react'
import styles from '@/app/(after-login)/_component/follow-recommand.module.css'
import { User } from '@/model/User'

type Prop = { user: User }

const FollowRecommend = ({ user }: Prop) => {
  const onFollow = () => {}

  return (
    <div className={styles.container}>
      <div className={styles.userLogoSection}>
        <div className={styles.userLogo}>
          <img src={user.image} alt={user.id} />
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.title}>{user.nickname}</div>
        <div className={styles.count}>@{user.id}</div>
      </div>
      <div className={styles.followButtonSection}>
        <button onClick={onFollow}>Follow</button>
      </div>
    </div>
  )
}
export default FollowRecommend
