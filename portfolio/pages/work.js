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
    return (
        <Layout nav={nav}>
            <Head>
                <title>Work | Sara Kevorkian</title>
            </Head>
            <section>
                <h1>Work</h1>
                {works.items.map(work=>{
                    console.log(work)
                    return (
                        <div key={work.sys.id}>
                            {work.fields.name}
                        </div>
                    )
                })}
            </section>
        </Layout>
    )
}