import { SessionProvider } from 'next-auth/react'
import React from 'react'
import NextThemeProvider from './ThemeProvider'

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
