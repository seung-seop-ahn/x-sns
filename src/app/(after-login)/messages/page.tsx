import React from 'react'
import Room from '@/app/(after-login)/messages/_component/Room'
import styles from '@/app/(after-login)/messages/messages.module.css'

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  )
}
export default Page
