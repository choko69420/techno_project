import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto min-h-screen w-full bg-sky-200">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
