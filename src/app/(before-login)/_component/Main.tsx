import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import twitter from '/public/twitter.jpeg'
import styles from '@/app/(before-login)/_component/main.module.css'

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={twitter} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>{`What's happening now`}</h1>
        <h2>{`Join now`}</h2>
        <Link href="/signup" className={styles.signup}>
          {`Create account`}
        </Link>
        <h3>{`Already joined?`}</h3>
        <Link href="/login" className={styles.login}>
          {`Login`}
        </Link>
      </div>
    </div>
  )
}
export default Main
