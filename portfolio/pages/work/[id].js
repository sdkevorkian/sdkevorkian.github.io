import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout/layout'
import Date from '../../components/date/date'
import { getNav, getById, getWorks } from '../../lib/CMS'
import utilStyles from '../../styles/utils.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export async function getStaticProps({ params }) {
  const nav = await getNav()
  const workItem = await getById(params.id)
  return {
    props: {
      nav,
      workItem
    }
  }
}

export async function getStaticPaths() {
  const paths = await getWorks();
  
  return {
    paths: paths.items.map((path)=>{
      return {'params':{'id':path.sys.id}}
    }),
    fallback: false
  }
}

export default function Work({ workItem, nav }) {
  return (
    <Layout nav={nav}>
        <Head>
            <title>{workItem.name} | Sara Kevorkian</title>
        </Head>
        <h1>{workItem.name}</h1>
        <Link href="/work" >
          <a className={utilStyles.btn + ' ' + utilStyles.largeSpacer}>← Back to all work</a>
        </Link>
        <img
          src={'https:' + workItem.image.fields.file.url}
          alt={workItem.image.fields.description}/>
        
        <Date dateString={workItem.lastUpdated} />
        {documentToReactComponents(workItem.description)}
        <a className={utilStyles.btn} href={workItem.liveSite} target="_blank">live site</a>
        <a className={utilStyles.btn} href={workItem.githubUrl} target="_blank">github</a>
        {workItem.contributors && workItem.contributors.map(person=>{
          return <a href={person.fields.linkUrl} target="_blank" key={person.sys.id}>{person.fields.linkText}</a>
        })}
    </Layout>
  )
}