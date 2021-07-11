import Head from 'next/head'
import Layout from '../components/layout/layout'
import Resume from '../components/resume/resume'
import ContactSection from '../components/contactSection/contactSection'
import { getNav, getResume } from '../lib/CMS'

export async function getStaticProps() {
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
            <ContactSection />
            <Resume resume={resume}/>
        </Layout>
    )
}