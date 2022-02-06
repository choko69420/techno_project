import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../Components/NavBar'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto min-h-screen w-full bg-sky-200">
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
