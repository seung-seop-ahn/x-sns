import React from 'react'
import styles from '@/app/page.module.css'

type Props = {
  children: React.ReactNode
  modal: React.ReactNode
  modal2: React.ReactNode
}

const Layout = ({ children, modal, modal2 }: Props) => {
  return (
    <div className={styles.container}>
      {children}
      {modal}
      {modal2}
    </div>
  )
}
export default Layout
