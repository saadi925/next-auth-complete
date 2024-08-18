import { Button } from '@repo/ui/components/button'
import Link from 'next/link'
import React from 'react'

export default function Home() {
 
  return (
    <div>
      <Button>
        <Link href="/auth/login">
         Login
        </Link>
      </Button>
    </div>
  )
}
