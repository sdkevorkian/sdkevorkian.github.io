import Head from 'next/head'
import Layout from '../components/layout/layout'
import Resume from '../components/resume/resume'
import { getNav, getResume } from '../lib/CMS'

export async function getStaticProps({ params }) {
    const nav = await getNav()
    const resume = await getResume();
    return {
        props: {
        nav,
        resume
        }
    }
}


export default function Contact({nav, resume}){
    return (
        <Layout nav={nav}>
            <Head>
                <title>Contact Sara Kevorkian</title>
            </Head>
            <section>
                <h1>Contact</h1>
            </section>
            <Resume resume={resume}/>
        </Layout>
    )
}