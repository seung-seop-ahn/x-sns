'use client'

import { useRouter } from 'next/navigation'
import Main from '@/app/(before-login)/_component/Main'

const Page = () => {
  const router = useRouter()
  router.replace('/i/flow/login')
  return <Main />
}
export default Page
