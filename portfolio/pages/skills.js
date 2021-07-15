import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head'
import Layout from '../components/layout/layout'
import { getNav, getSkills } from '../lib/CMS'
import skillsStyles from './skills.module.scss'

export async function getStaticProps() {
    const nav = await getNav();
    const skills = await getSkills();
        
    return {
        props: {
            nav,
            skills
        }
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
                    <span><h2>Top skills:</h2> {skills.topSkills}</span>
                    <span><h2>Additional skills:</h2> {skills.exploringSkills}</span>
                    <span><h2>Soft skills:</h2> {skills.softSkills}</span>
                </div>
                <a href="https://www.codewars.com/users/doublexhelix/"><img src="https://www.codewars.com/users/doublexhelix/badges/large" /></a>
            </section>
        </Layout>
    )
}