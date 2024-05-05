'use client'

import { useRouter } from 'next/navigation'
import Main from '@/app/(before-login)/_component/Main'

const Page = () => {
  const router = useRouter()
  router.replace('/i/flow/signup')
  return <Main />
}
export default Page
