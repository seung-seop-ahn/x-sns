'use client'

import React from 'react'
import style from '@/app/(after-login)/_component/logout-button.module.css'

const LogoutButton = () => {
  const me = {
    // todo: temp
    id: 'seungseopahn',
    nickname: 'Kevin Ahn',
    image: '/profile.jpeg',
  }

  const onLogout = () => {}

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  )
}
export default LogoutButton
