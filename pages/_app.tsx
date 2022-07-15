import '../styles/index.scss'
import type { AppProps } from 'next/app'
import Header from '../layouts/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
