import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head'
import Layout from '../components/layout/layout'
import { getSkills } from '../lib/CMS'
import skillsStyles from './skills.module.scss'

export async function getStaticProps() {
    try {
        const skillsPage = await getSkills();
        const skills = skillsPage.skills.fields;
        const nav = skillsPage.nav.fields;
        return {
            props: {
                nav,
                skills
            }
        }
    } catch(err){
        return {notFound:true}
    }
}


export default function Skills({nav, skills}){
    return (
        <Layout nav={nav}>
            <Head>
                <title>Skills | Sara Kevorkian</title>
            </Head>
            <section className={skillsStyles.skills}>
                <h1>Skills</h1>
                {skills.paragraph && documentToReactComponents(skills.paragraph)}
                <div>
                    <span><h2>Top Skills:</h2> {skills.topSkills}</span>
                    <span><h2>Additional Skills:</h2> {skills.exploringSkills}</span>
                    <span><h2>Soft Skills:</h2> {skills.softSkills}</span>
                </div>
                <a href="https://www.codewars.com/users/doublexhelix/"><img src="https://www.codewars.com/users/doublexhelix/badges/large" /></a>
            </section>
        </Layout>
    )
}