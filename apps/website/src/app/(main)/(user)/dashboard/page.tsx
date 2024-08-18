import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/components/avatar'
import React from 'react'
import SignOutButton from '@/components/auth-components/SignOutButton'
import { auth } from '@/auth'

export default async function page() {
    const session = await  auth()

    const getNamePrefix = (name?: string | null) => {
    if (!name)  return ""
      return name.split(" ")[0]
    }
  return (
    <div className='h-screen justify-center items-center  flex flex-col'>
   
      <Avatar >
        <AvatarImage  src={session?.user.image || ""}  />
        <AvatarFallback className='border' >
           {getNamePrefix(session?.user?.name)}  
        </AvatarFallback>
      </Avatar>
      <p className="text-3xl font-semibold">
        Welcome {session?.user.name}! You are logged in
      </p>
      <SignOutButton />
      <pre className='px-2 text-sm text-wrap '>
        {
          JSON.stringify(session, null, 2)
        }
      </pre>
    </div>
  )
}
