import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import About from '../components/about/about'
import { getAbout } from '../lib/CMS'

export async function getStaticProps() {
  const aboutPage = await getAbout()
  const about = aboutPage.about.fields;
  const nav = aboutPage.nav.fields;
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