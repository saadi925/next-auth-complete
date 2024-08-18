import NextThemeProvider from '@repo/ui/theme/ThemeProvider'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function Provider({
    children 
} :{
    children: React.ReactNode
}) {
  return (
    <NextThemeProvider>
      <SessionProvider>
    {children}
      </SessionProvider>
    </NextThemeProvider>
  )
}
