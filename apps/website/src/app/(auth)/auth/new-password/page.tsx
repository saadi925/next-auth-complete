import React from 'react'
import NewPasswordForm from '@//components/auth-components/NewPasswordForm'
interface ResetPasswordProps {
    searchParams : { 
        token? : string
    }
}

export default function page({searchParams} : ResetPasswordProps) {
    const {token } = searchParams

  return (
    <NewPasswordForm token={token} />
  )
}
