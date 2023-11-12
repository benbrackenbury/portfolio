import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from '@/components/Footer'

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
    <html
      lang="en"
      className={`
      ${GeistSans.className}
      max-w-[100dvw] overflow-x-hidden
      bg-background text-foreground
      dark:bg-backgroundDark dark:text-foregroundDark
    `}
    >
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
