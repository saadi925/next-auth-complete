import React from 'react'
import EmailVerifyForm from '@//components/auth-components/EmailVerifyForm'

interface EmailVerifyProps {
    searchParams : { 
        token? : string
    }
}

export default function page({searchParams} : EmailVerifyProps) {
  const {token } = searchParams
  
    return (
   <EmailVerifyForm token={token}/>
  )
}
