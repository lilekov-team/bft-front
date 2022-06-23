import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '../src/components/Providers/ThemeProvider/themeProvider'
import { ChakraProvider } from '@chakra-ui/provider'
import { extendTheme } from '@chakra-ui/react'
import LanguageProvider from '../src/components/Providers/LanguageProvider/language-provider'

const theme = extendTheme({

})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider>
        <LanguageProvider>
          <Component {...pageProps} />

        </LanguageProvider>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp
