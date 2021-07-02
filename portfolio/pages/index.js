import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import About from '../components/about/about'
import { getAbout } from '../lib/CMS'

export async function getStaticProps() {
  const about = await getAbout()
  return {
    props: {
      about
    }
  }
}
export default function Home({about}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <About about = {about}/>
      </section>
    </Layout>
  )
}