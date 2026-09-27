import GitHubBanner from '@/components/github-banner'
import Header from '@/parts/header'
import '@/style/index.css'
import type { Metadata } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import { PropsWithChildren } from 'react'

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ben Brackenbury',
  description: 'Web and iOS Developer in the United Kingdom',
  appleWebApp: {
    title: 'Ben Brackenbury',
  }
}

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang='en' className='bg-background text-foreground'>
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className='mx-auto max-w-6xl px-6 pb-12 opacity-100 transition-opacity duration-1000 starting:opacity-0'>
          {props.children}
          <GitHubBanner />
        </main>
      </body>
    </html>
  )
}
