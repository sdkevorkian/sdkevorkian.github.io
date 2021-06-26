import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date/date'
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Sara!

I grew up near Seattle and enjoy living in the PNW. I am a Seattle-based front end developer that has delivered for a variety of industries including airlines and real estate. I am primarily a front end developer with some back end development experience. My background in biotech taught me the importance of flexibility and the mindset to break concepts down into testable pieces. I am an analytical thinker and love to ask questions, while keeping a collaborative, positive mindset. In my 2+ years of experience I have learned new technologies quickly to meet project needs.</p>
        <p>
          <Link href="/work/first-work" >
            <a className={utilStyles.link}>Check my work!</a>
          </Link>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/work/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}