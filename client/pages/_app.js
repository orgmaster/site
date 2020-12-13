import Head from 'next/head'
import { ResetStyle } from "../styles/Reset";
import { GlobalStyle } from "../styles/Global";
import Layout from '../Layout';
import "../styles/tailwind.css";

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>OriginMaster</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <ResetStyle />
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}