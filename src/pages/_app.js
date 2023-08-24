import '@/styles/globals.css'
import Head from 'next/head'
import Layout from "@/components/Layouts/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>elgazeta</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/favicon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
