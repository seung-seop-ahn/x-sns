import React from 'react'
import BackButton from '@/app/(after-login)/_component/BackButton'
import SearchForm from '@/app/(after-login)/_component/SearchForm'
import SearchResult from '@/app/(after-login)/search/_component/SearchResult'
import Tab from '@/app/(after-login)/search/_component/Tab'
import styles from '@/app/(after-login)/search/search.module.css'

type Props = {
  searchParams: {
    q: string
    f?: string
    pf?: string
  }
}

const Page = ({ searchParams }: Props) => {
  return (
    <main className={styles.main}>
      <div className={styles.searchTop}>
        <div className={styles.searchZone}>
          <div className={styles.buttonZone}>
            <BackButton />
          </div>
          <div className={styles.formZone}>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className={styles.list}>
        <SearchResult searchParams={searchParams} />
      </div>
    </main>
  )
}
export default Page
