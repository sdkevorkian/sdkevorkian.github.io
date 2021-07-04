import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import About from '../components/about/about'
import { getAbout, getNav } from '../lib/CMS'

export async function getStaticProps() {
  const about = await getAbout()
  const nav = await getNav()
  return {
    props: {
      about,
      nav
    }
  }
}
export default function Home({about, nav}) {
  return (
    <Layout home nav={nav}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <About about = {about}/>
      </section>
    </Layout>
  )
}