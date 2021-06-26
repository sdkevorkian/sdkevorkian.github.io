import Head from 'next/head'
import Layout from '../../components/layout/layout'
import Date from '../../components/date/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.scss'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Work({ postData }) {
  return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <h1>{postData.title}</h1>

        <br />
        <div>
            <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </Layout>
  )
}