import Head from 'next/head'
import Layout from '../components/layout/layout'
import Resume from '../components/resume/resume'
import ContactSection from '../components/contactSection/contactSection'
import { getContact } from '../lib/CMS'

export async function getStaticProps() {
    const contactPage = await getContact();
    const contact = contactPage.contact.fields;
    const nav = contactPage.nav.fields;
    const resume = contactPage.resume.fields;
    return {
        props: {
            nav,
            contact,
            resume
        }
    }
}


export default function Contact({nav, contact, resume}){
    return (
        <Layout nav={nav}>
            <Head>
                <title>Contact Sara Kevorkian</title>
            </Head>
            <ContactSection contact={contact}/>
            <Resume resume={resume}/>
        </Layout>
    )
}