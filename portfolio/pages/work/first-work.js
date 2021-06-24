import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout/layout'

export default function FirstWork() {
    return (
        <Layout>
            <Head>
                <title>First Work</title>
            </Head>
            <h1>
                First work
            </h1>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </Layout>
        )
  }