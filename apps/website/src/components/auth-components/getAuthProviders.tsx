"use client"
import { availableProviders } from "@/auth.config"
import { useMemo } from "react"
import {
    Facebook
  } from 'lucide-react'
import GoogleIcon, { GithubIcon } from '@/assets/icons/SocialIcons';
export default function getAuthProviders() {
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
      return providers
}
