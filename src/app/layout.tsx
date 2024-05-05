import type { Metadata } from 'next'
import { EB_Garamond, Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import Header from './(layout)/header'
import SmoothScroll from './(layout)/smooth-scroll'
import ThemeProvider from './(layout)/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ben Brackenbury',
  description: 'Ben Brackenbury, Web & iOS Developer',
}

type RootLayoutProps = {
  children: React.ReactNode
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
})

const fonts = `${inter.variable} ${garamond.variable}`

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang='en' className={fonts} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SmoothScroll>
            <div className='flex min-h-screen flex-col'>
              <Header />
              <main className='flex-1 py-4 px-4 lg:px-8'>{props.children}</main>
              <Footer />
              <Toaster />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}

function Footer() {
  return (
    <footer className='flex items-center justify-center py-4'>
      <p className='text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} Ben Brackenbury
      </p>
    </footer>
  )
}
