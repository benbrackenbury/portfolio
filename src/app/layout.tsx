import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ben Brackenbury',
  description: 'Ben Brackenbury, Web & iOS Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`
      ${inter.className}
      bg-background text-foreground
      dark:bg-backgroundDark dark:text-foregroundDark
      max-w-[100dvw] overflow-x-hidden
    `}>
      <body>{children}</body>
    </html>
  )
}
