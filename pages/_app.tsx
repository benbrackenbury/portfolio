import '../styles/index.scss'
import type { AppProps } from 'next/app'
import { Footer } from '../layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='app'>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
