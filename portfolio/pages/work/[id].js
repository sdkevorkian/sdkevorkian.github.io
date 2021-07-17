import Head from 'next/head'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../../components/layout/layout'
import Date from '../../components/date/date'
import { getWorks, getWork } from '../../lib/CMS'
import utilStyles from '../../styles/utils.module.scss'
import workStyles from './workpage.module.scss'

export async function getStaticProps({ params }) {
  try {
    const work = await getWork(params.id)
    const workItem = work.work.fields;
    const nav = work.nav.fields;
    return {
      props: {
        nav,
        workItem
      }
    }
  }catch (err){
    return {notFound: true}
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
        <section className={workStyles.workPage}>
          <h1>{workItem.name}</h1>

          <div className={workStyles.description}>{documentToReactComponents(workItem.description)}</div>
          <p><b>Last updated:</b> <Date dateString={workItem.lastUpdated} /></p>
          <div className={workStyles.btnContainer}>
            {workItem.liveSite && <a className={utilStyles.externalBtn} href={workItem.liveSite} target="_blank">Live Site</a>}
            {workItem.githubUrl && <a className={utilStyles.externalBtn} href={workItem.githubUrl} target="_blank">GitHub</a>}
          </div>
          <img src={'https:' + workItem.image.fields.file.url}
            alt={workItem.image.fields.description}/>
          
          {workItem.contributors && <>
          <p><b>Contributors: </b></p>
          { workItem.contributors.map(person=>{
            return <p className={workStyles.contributor} key={person.sys.id}>
                <a href={person.fields.linkUrl} target="_blank" key={person.sys.id}>{person.fields.linkText}</a>
              </p>
          })}
          </>}
          <Link href="/work" >
            <a className={utilStyles.btn}>← Back to all work</a>
          </Link>
        </section>
    </Layout>
  )
}