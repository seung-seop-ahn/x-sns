import Image from 'next/image'
import Link from 'next/link'
import zLogo from '/public/zlogo.png'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>{`What's happening now`}</h1>
        <h2>{`Join now`}</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
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
