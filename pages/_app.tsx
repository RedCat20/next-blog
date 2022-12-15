import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) =>(
    <>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
        <title>Blog application</title>
    </Head>
    <Component {...pageProps} />
    </>
)

export default App;