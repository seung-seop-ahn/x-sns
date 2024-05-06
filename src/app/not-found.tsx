import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <div>Page not found.</div>
      <Link href="/search">Search</Link>
    </div>
  )
}
export default NotFound
