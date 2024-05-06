import { redirect } from 'next/navigation'
import React from 'react'
import Main from '@/app/(before-login)/_component/Main'
import { auth } from '@/auth'

const Page = async () => {
  const session = await auth()
  if (session?.user) {
    redirect('/home')
    return null
  }
  return <Main />
}
export default Page
