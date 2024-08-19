'use client'
import React from 'react'
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { availableProviders } from '@/auth.config';
import { cn } from '@repo/ui/lib/utils';
import { Button } from '@repo/ui/components/button';
import getAuthProviders from './getAuthProviders';

export default function AuthProvidersCTA() {
  const providers = getAuthProviders();

  const withAuthProvider = async (provider: availableProviders) => {
    await signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    });
  };

  return (
    <div className="">
      {/* Separator line with text */}
      <div className="flex items-center justify-center">
        <div className="border-t border-gray-800 dark:border-gray-600 w-full"></div>
        <span className="px-3 text-sm text-gray-500">or</span>
        <div className="border-t border-gray-800 dark:border-gray-600 w-full"></div>
      </div>

      {/* Provider Buttons */}
      <div className="flex gap-3 items-center flex-wrap mt-4">
        {providers.map((provider, index) => (
          <Button
            key={index}
            onClick={() => withAuthProvider(provider.id)}
            className={cn(`border rounded-full py-1 px-3 w-full flex items-center gap-3 justify-center`)}
          >
            <provider.Icon className="w-5 h-5" />
            <span className='text-sm'>
              Continue with {provider.name}
            </span>
          </Button>
        ))}
      </div>
    </div>
  )
}
