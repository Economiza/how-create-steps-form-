import { StateMachineProvider } from 'little-state-machine'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateMachineProvider>
      <Component {...pageProps} />
    </StateMachineProvider> 
  )
  
  
}

export default MyApp
