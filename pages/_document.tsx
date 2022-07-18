
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
            </Head>
            <body>
                <noscript><div><img src="https://mc.yandex.ru/watch/89595157" style={{ position: "absolute", left: "-9999px" }} alt="" /></div></noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}