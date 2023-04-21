import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (<ChakraProvider>
      <Head>
        <title>ReviewGush</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Component {...pageProps} />
  </ChakraProvider>)
}
