import React from 'react'
import Home from '@/app/(after-login)/home/page'

type Props = {
  params: { username: string; id: string; photoId: string }
}

const Page = ({ params }: Props) => {
  params.username // elonmusk
  params.id // 1
  params.photoId // 1

  return <Home />
}
export default Page
