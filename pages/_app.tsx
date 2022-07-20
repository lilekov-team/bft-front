import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/provider'
import { extendTheme } from '@chakra-ui/react'
import LanguageProvider from '../src/components/Providers/LanguageProvider/language-provider'
import "video-react/dist/video-react.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from 'next/script'
import Head from 'next/head'


const theme = extendTheme({

})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BFT</title>
      </Head>
      <ChakraProvider theme={theme}>
        {/* <Script
          strategy='afterInteractive'
          id="metrika"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                    ym(89595157, "init", {
                         clickmap:true,
                         trackLinks:true,
                         accurateTrackBounce:true,
                         webvisor:true
                    });`
          }}
          type="text/javascript"
        /> */}
        <LanguageProvider>
          <Component {...pageProps} />
        </LanguageProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
