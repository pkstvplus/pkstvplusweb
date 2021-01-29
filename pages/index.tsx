import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>pkstvplus rewrite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Hello World</h1>
      </div>
    </Layout>
  )
}
