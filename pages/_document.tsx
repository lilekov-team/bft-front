
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
    return (
        <Html lang='ru'>
            <Head >
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='*' />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>

                <meta
                    name="description"
                    content="BFT"
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <body>
                <noscript><div><img src="https://mc.yandex.ru/watch/89595157" style={{ position: "absolute", left: "-9999px" }} alt="" /></div></noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}