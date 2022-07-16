import '../styles/index.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer } from '../layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='app'>
      <Head>
        <meta name="description" content="Ben Brackenbury, web, iOS, and macOS developer." />
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
