import Head from 'next/head'
import Layout from '../components/layout/layout'
import { getNav } from '../lib/CMS'

export async function getStaticProps() {
    const nav = await getNav()
    return {
        props: {
        nav
        }
    }
}

export default function WorkPage({nav}){
    return (
        <Layout nav={nav}>
            <Head>
                <title>Sara Kevorkian's work</title>
            </Head>
            <section>
                <h1>Work</h1>
            </section>
        </Layout>
    )
}