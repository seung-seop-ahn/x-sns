import { faker } from '@faker-js/faker'
import cx from 'classnames'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'
import React from 'react'
import BackButton from '@/app/(after-login)/_component/BackButton'
import styles from '@/app/(after-login)/messages/[room]/chat-room.module.css'

dayjs.extend(relativeTime)

const Page = () => {
  const user = {
    id: 'hero',
    nickname: 'Hero',
    image: faker.image.avatar(),
  }
  const messages = [
    { messageId: 1, roomId: 123, id: 'seungseopahn', content: 'Hi.', createdAt: new Date() },
    { messageId: 2, roomId: 123, id: 'hero', content: 'Bye.', createdAt: new Date() },
  ]

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <BackButton />
        <div>
          <h2>{user.nickname}</h2>
        </div>
      </div>
      <Link href={user.nickname} className={styles.userInfo}>
        <img src={user.image} alt={user.id} />
        <div>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.id}</div>
      </Link>
      <div className={styles.list}>
        {messages.map((m) => {
          if (m.id === 'seungseopahn') {
            return (
              <div key={m.messageId} className={cx(styles.message, styles.myMessage)}>
                <div className={styles.content}>{m.content}</div>
                <div className={styles.date}>{dayjs(m.createdAt).format('YYYY-MM-DD A:HH:mm')}</div>
              </div>
            )
          }
          return (
            <div key={m.messageId} className={cx(styles.message, styles.yourMessage)}>
              <div className={styles.content}>{m.content}</div>
              <div className={styles.date}>{dayjs(m.createdAt).format('YYYY-MM-DD A:HH:mm')}</div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
export default Page
