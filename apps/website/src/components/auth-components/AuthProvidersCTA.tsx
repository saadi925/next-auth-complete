'use client'
import React, { useMemo } from 'react'
import { signIn } from 'next-auth/react';
import {
  Facebook
} from 'lucide-react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import GoogleIcon, { GithubIcon } from '@/assets/icons/SocialIcons';
import { availableProviders } from '@/auth.config';
import { cn } from '@repo/ui/lib/utils';
import { Button } from '@repo/ui/components/button';
export default function AuthProvidersCTA() {
  const providers: {
    name: string,
    id: availableProviders,
    Icon: any
  }[] = useMemo(() => [
    {
      name: 'Google',
      id: 'google',
      Icon: GoogleIcon,
    },
    {
      name: 'Github',
      id: 'github',
      Icon: GithubIcon
    }
    , {
      name: 'Facebook',
      id: 'facebook',
      Icon: Facebook
    }

  ], [])
  const withAuthProvider = async (provider: availableProviders) => {
    await signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })
  }
  return (
    <div className="mt-6 flex gap-3 items-center flex-wrap">
      {
        providers.map((provider, index) => (
          <Button
            key={index}
            onClick={() => withAuthProvider(provider.id)}
            className={cn(`  border  rounded-full py-1 px-3 w-full flex items-center  gap-3 justify-center`)}
          >
            <provider.Icon className="w-5 h-5" />
            <span className='text-sm'>
              Continue with   {provider.name}
            </span>
          </Button>
        ))
      }

    </div>

  )
}
