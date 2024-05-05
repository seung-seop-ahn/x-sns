import React from 'react'
import SearchForm from '@/app/(after-login)/_component/SearchForm'
import Trend from '@/app/(after-login)/_component/Trend'
import styles from '@/app/(after-login)/explore/explore.module.css'

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.formZone}>
        <SearchForm />
      </div>
      <div className={styles.trend}>
        <h3>Trends for you</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </main>
  )
}
export default Page
