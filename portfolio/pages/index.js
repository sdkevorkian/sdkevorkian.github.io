import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <Link href="/work/first-work" >
            <a className={utilStyles.link}>Check my work!</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}