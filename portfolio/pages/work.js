import Head from 'next/head'
import Layout from '../components/layout/layout'
import WorkItem from '../components/workItem/workitem'
import { getNav, getWorks } from '../lib/CMS'
import gridStyles from '../styles/grid.module.scss'

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
                <div className={gridStyles.grid}>

                {works.items.map(work=>{
                    console.log(work)
                    return (
                        <WorkItem work={work.fields} key={work.sys.id}/>
                        )
                    })}
                </div>
            </section>
        </Layout>
    )
}