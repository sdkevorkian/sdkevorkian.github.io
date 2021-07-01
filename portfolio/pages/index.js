import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import About from '../components/about/about'
import { getSortedPostsData } from '../lib/posts'
import { getAbout } from '../lib/CMS'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const about = await getAbout()
  console.log(about)
  return {
    props: {
      about
    }
  }
}
export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <About />
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
      </section> */}
    </Layout>
  )
}