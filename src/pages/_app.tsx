import type { AppProps } from 'next/app'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>

    </>

  )
}

export default MyApp
