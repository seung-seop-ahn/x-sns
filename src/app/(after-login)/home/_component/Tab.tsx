'use client'

import React, { useState } from 'react'
import styles from '@/app/(after-login)/home/_component/tab.module.css'

const Tab = () => {
  const [tab, setTab] = useState('rec')

  const onClickRec = () => {
    setTab('rec')
  }
  const onClickFol = () => {
    setTab('fol')
  }

  return (
    <div className={styles.homeFixed}>
      <div className={styles.homeText}>Home</div>
      <div className={styles.homeTab}>
        <div onClick={onClickRec}>
          Recommend
          <div className={styles.tabIndicator} hidden={tab === 'fol'}></div>
        </div>
        <div onClick={onClickFol}>
          Following<div className={styles.tabIndicator} hidden={tab === 'rec'}></div>
        </div>
      </div>
    </div>
  )
}
export default Tab
