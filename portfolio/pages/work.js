import Head from 'next/head'
import Layout from '../components/layout/layout'
import { getNav, getWorks } from '../lib/CMS'

export async function getStaticProps() {
    const nav = await getNav()
    const works = await getWorks()
    return {
        props: {
            nav,
            works
        }
    }
}

export default function WorkPage({nav, works}){
    console.log(works)
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