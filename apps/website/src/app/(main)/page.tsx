import { Button } from '@repo/ui/components/button'
import Link from 'next/link'
import React from 'react'

export default function Home() {
 
  return (
    <div>
      <Button>
        <Link href="/auth/signin">
         SignIn 
        </Link>
      </Button>
      <Button>
        <Link href="/auth/signup">
         SignUp 
        </Link>
      </Button>
        <p>if you will refresh when you have opened the modal , it will take you to the actual auth/signin path</p>
    </div>
  )
}
