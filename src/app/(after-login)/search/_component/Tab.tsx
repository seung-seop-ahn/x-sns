'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import styles from '@/app/(after-login)/search/search.module.css'

const Tab = () => {
  const [current, setCurrent] = useState('hot')
  const router = useRouter()
  const searchParams = useSearchParams()
  const onClickHot = () => {
    setCurrent('hot')
    router.replace(`/search?q=${searchParams.get('q')}`)
  }
  const onClickNew = () => {
    setCurrent('new')
    router.replace(`/search?${searchParams.toString()}&f=live`)
  }

  return (
    <div className={styles.homeFixed}>
      <div className={styles.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={styles.tabIndicator} hidden={current === 'new'}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={styles.tabIndicator} hidden={current === 'hot'}></div>
        </div>
      </div>
    </div>
  )
}
export default Tab
