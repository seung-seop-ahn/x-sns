'use server'

import { redirect } from 'next/navigation'

export const signup = async (prevState: any, formData: FormData) => {
  if (!formData.get('id')) {
    return { message: 'no_id' }
  }
  if (!formData.get('name')) {
    return { message: 'no_named' }
  }
  if (!formData.get('password')) {
    return { message: 'no_password' }
  }
  if (!formData.get('image')) {
    return { message: 'no_image' }
  }

  let shouldRedirect = false
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    })
    console.log(response.status)
    if (response.status === 403) {
      return { message: 'user_exists' }
    }
    console.log(await response.json())
    shouldRedirect = true
  } catch (e) {
    console.error(e)
  }

  if (shouldRedirect) {
    redirect('/home')
  }
  return { message: null }
}
