import Footer from '@/components/Footer'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'

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
      lang='en'
      className={`
      ${GeistSans.className}
      max-w-[100dvw] overflow-x-hidden
      bg-background text-foreground
      dark:bg-backgroundDark dark:text-foregroundDark
    `}
    >
      <body>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
