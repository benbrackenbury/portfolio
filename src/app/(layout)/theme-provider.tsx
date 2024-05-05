'use client'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

type ThemeProviderProps = {
  children: React.ReactNode
}

export default function ThemeProvider(props: ThemeProviderProps) {
  return (
    <NextThemeProvider enableSystem attribute='class'>
      {props.children}
    </NextThemeProvider>
  )
}
