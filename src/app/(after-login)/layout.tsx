import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FollowRecommend from '@/app/(after-login)/_component/FollowRecommend'
import LogoutButton from '@/app/(after-login)/_component/LogoutButton'
import NavMenu from '@/app/(after-login)/_component/NavMenu'
import RightSearchZone from '@/app/(after-login)/_component/RightSearchZone'
import TrendSection from '@/app/(after-login)/_component/TrendSection'
import styles from '@/app/(after-login)/layout.module.css'
import twitter from '/public/twitter.jpeg'

type Props = {
  children: React.ReactNode
  modal: React.ReactNode
}

const Layout = ({ children, modal }: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}>
            <Link className={styles.logo} href={'/home'}>
              <div className={styles.logoPill}>
                <Image src={twitter} alt={'logo'} width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link className={styles.postButton} href={'/compose/tweet'}>
                Post
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}>
          <main className={styles.main}>{children}</main>
          <section className={styles.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={styles.followRecommend}>
              <h3>Follows for you</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  )
}
export default Layout
