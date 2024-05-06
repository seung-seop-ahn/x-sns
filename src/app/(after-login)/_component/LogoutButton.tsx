'use client'

import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import style from '@/app/(after-login)/_component/logout-button.module.css'

const LogoutButton = () => {
  const router = useRouter()
  const { data: me } = useSession()

  const onLogout = async () => {
    try {
      await signOut({ redirect: false })
    } catch (e) {
      console.error(e)
    }
    router.replace('/')
  }

  if (!me?.user) {
    return null
  }

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.user?.image as string} alt={me.user?.email as string} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  )
}
export default LogoutButton
