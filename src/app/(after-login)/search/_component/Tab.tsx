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
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.delete('f')
    router.replace(`/search?${newSearchParams.toString()}`)
  }
  const onClickNew = () => {
    setCurrent('new')
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('f', 'live')
    router.replace(`/search?${newSearchParams.toString()}`)
  }

  return (
    <div className={styles.homeFixed}>
      <div className={styles.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={styles.tabIndicator} hidden={current === 'new'}></div>
        </div>
        <div onClick={onClickNew}>
          Recent
          <div className={styles.tabIndicator} hidden={current === 'hot'}></div>
        </div>
      </div>
    </div>
  )
}
export default Tab
