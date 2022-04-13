import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {StateMachineProvider} from 'little-state-machine'

function MyApp({ Component, pageProps }: AppProps) {
  return <StateMachineProvider>
    <Component {...pageProps} />
  </StateMachineProvider>
  
}

export default MyApp
