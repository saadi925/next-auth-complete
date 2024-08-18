'use client'
import { Button } from '@repo/ui/components/button'
import { cn } from '@repo/ui/lib/utils'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function SignOutButton() {
  return (
      <Button className={cn(`bg-destructive/15 dark:bg-red-100 text-red-500 dark:text-black `)} onClick={()=> signOut()}>
        Sign Out
      </Button>
  )
}
