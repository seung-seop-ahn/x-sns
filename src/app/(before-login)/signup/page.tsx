'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Main from '@/app/(before-login)/_component/Main'

const Page = () => {
  const router = useRouter()
  const { data: session } = useSession()
  if (session?.user) {
    router.replace('/home')
    return null
  }

  router.replace('/i/flow/signup')
  return <Main />
}
export default Page
