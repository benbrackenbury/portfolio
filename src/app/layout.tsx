import GitHubBanner from '@/components/github-banner'
import Header from '@/parts/header'
import '@/style/index.css'
import type { Metadata } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import { PropsWithChildren } from 'react'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ben Brackenbury',
  description: 'Web and iOS Developer in the United Kingdom',
}

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang='en' className='bg-background text-foreground'>
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <main className='px-4 mx-auto max-w-7xl pt-[16vh] pb-12 sm:pt-[10vh]
          starting:opacity-0 opacity-100 duration-1000 transition-opacity
          '>
          {props.children}
        <GitHubBanner />
        </main>
      </body>
    </html>
  )
}
