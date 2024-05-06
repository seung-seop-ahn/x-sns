'use client'

import { useFormState, useFormStatus } from 'react-dom'
import BackButton from '@/app/(before-login)/_component/BackButton'
import styles from '@/app/(before-login)/_component/signup.module.css'
import { signup } from '@/app/(before-login)/_lib/signup'

function showMessage(message: string | null | undefined) {
  if (message === 'no_id') {
    return 'ID required.'
  }
  if (message === 'no_name') {
    return 'Nickname required.'
  }
  if (message === 'no_password') {
    return 'Password required.'
  }
  if (message === 'no_image') {
    return 'Image required.'
  }
  if (message === 'user_exists') {
    return 'ID already exists.'
  }
  return ''
}

const SignupModal = () => {
  const [state, formAction] = useFormState(signup, { message: null })
  const { pending } = useFormStatus()

  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <BackButton />
            <div>Create account</div>
          </div>
          <form action={formAction}>
            <div className={styles.modalBody}>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="id">
                  ID
                </label>
                <input
                  id="id"
                  name={'id'}
                  className={styles.input}
                  type="text"
                  placeholder=""
                  // value={id}
                  // onChange={onChangeId}
                  // required
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="name">
                  Nickname
                </label>
                <input
                  id="name"
                  name={'name'}
                  className={styles.input}
                  type="text"
                  placeholder=""
                  // value={nickname}
                  // onChange={onChangeNickname}
                  required
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name={'password'}
                  className={styles.input}
                  type="password"
                  placeholder=""
                  // value={password}
                  // onChange={onChangePassword}
                  required
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="image">
                  Profile
                </label>
                <input
                  id="image"
                  name={'image'}
                  className={styles.input}
                  type="file"
                  accept="image/*"
                  // onChange={onChangeImageFile}
                  // required
                />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button type={'submit'} className={styles.actionButton} disabled={pending}></button>
              <div className={styles.error}>{showMessage(state?.message)}</div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default SignupModal
