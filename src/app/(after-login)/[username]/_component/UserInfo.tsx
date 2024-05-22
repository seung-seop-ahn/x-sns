'use client'

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getUser } from '@/app/(after-login)/[username]/_lib/getUser'
import styles from '@/app/(after-login)/[username]/profile.module.css'
import BackButton from '@/app/(after-login)/_component/BackButton'
import { User } from '@/model/User'

type Props = {
  username: string
}

const UserInfo = ({ username }: Props) => {
  const {
    data: user,
    error,
    isLoading,
  } = useQuery<User, Object, User, [_1: string, _2: string]>({
    queryKey: ['users', username],
    queryFn: getUser,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  })
  if (error) {
    return (
      <>
        <div className={styles.header}>
          <BackButton />
          <h3 className={styles.headerTitle}>Profile</h3>
        </div>
        <div className={styles.userZone}>
          <div className={styles.userImage}></div>
          <div className={styles.userName}>
            <div>@{username}</div>
          </div>
        </div>
        <div
          style={{
            height: 100,
            alignItems: 'center',
            fontSize: 31,
            fontWeight: 'bold',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          Account Not Found
        </div>
      </>
    )
  }
  if (!user) {
    return null
  }

  return (
    <>
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
    </>
  )
}
export default UserInfo
