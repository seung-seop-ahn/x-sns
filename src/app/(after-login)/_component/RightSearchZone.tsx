'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import SearchForm from '@/app/(after-login)/_component/SearchForm'
import styles from '@/app/(after-login)/_component/right-search-zone.module.css'

const RightSearchZone = () => {
  const pathname = usePathname()
  const onChangeFollow = () => {}
  const onChangeAll = () => {}
  if (pathname === '/explore') {
    return null
  }
  if (pathname === '/search') {
    return (
      <div>
        <h5 className={styles.filterTitle}>Filter</h5>
        <div className={styles.filterSection}>
          <div>
            <label>User</label>
            <div className={styles.radio}>
              <div>All users</div>
              <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
            </div>
            <div className={styles.radio}>
              <div>My followers</div>
              <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.searchForm}>
      <SearchForm />
    </div>
  )
}
export default RightSearchZone
