import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head'
import Layout from '../components/layout/layout'
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

export default function Resume({nav, resume}){
    console.log(resume)
    return (
        <Layout nav={nav}>
            <Head>
                <title>Sara Kevorkian's Resume</title>
            </Head>
            <section>
                <h1>Resume</h1>
                {documentToReactComponents(resume.text)}
                <div>
                    <a href={resume.pdfResume.fields.file.url} download>Download PDF</a>
                    <a href={resume.pdfResume.fields.file.url} target="_blank">View PDF</a>
                </div>
                <div>
                    <a href={resume.pdfResume.fields.file.url} download>Download Plain Text</a>
                    <a href={resume.plainTextResume.fields.file.url} target="_blank">View Plain Text</a>
                </div>
            </section>
        </Layout>
    )
}