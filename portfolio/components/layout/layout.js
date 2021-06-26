import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './navigation'
import styles from './layout.module.scss'
import utilStyles from '../../styles/utils.module.scss'

const name = 'Sara Kevorkian'
export const siteTitle = 'Sara Kevorkian\'s Portfolio'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Sara Kevorkian portfolio front end web developer seattle wa"
        />
        <meta
          property="og:image"
          content="/images/self.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Navigation/>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}