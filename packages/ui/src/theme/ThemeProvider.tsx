import React from 'react'
import { ThemeProvider } from 'next-themes'
export default function NextThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ThemeProvider
            defaultTheme='system'
            enableSystem
            attribute='class'
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    )
}


