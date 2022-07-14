import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/provider'
import { extendTheme } from '@chakra-ui/react'
import LanguageProvider from '../src/components/Providers/LanguageProvider/language-provider'
import "video-react/dist/video-react.css"; 



const theme = extendTheme({

})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <LanguageProvider>
          <Component {...pageProps} />
        </LanguageProvider>
    </ChakraProvider>
  )
}

export default MyApp
