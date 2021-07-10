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


export default function Skills({nav}){
    return (
        <Layout nav={nav}>
            <Head>
                <title>Sara Kevorkian's skills</title>
            </Head>
            <section>
                <h1>Skills</h1>
            </section>
        </Layout>
    )
}