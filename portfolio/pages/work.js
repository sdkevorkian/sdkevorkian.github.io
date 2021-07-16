import Head from 'next/head'
import Layout from '../components/layout/layout'
import WorkItem from '../components/workItem/workitem'
import { getNav, getWorks } from '../lib/CMS'
import utilStyles from '../styles/utils.module.scss'

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
                
                <div className={utilStyles.grid}>

                {works.items.map(work=>{
                    return (
                        <WorkItem work={work.fields} key={work.sys.id} id={work.sys.id}/>
                        )
                    })}
                </div>
            </section>
        </Layout>
    )
}