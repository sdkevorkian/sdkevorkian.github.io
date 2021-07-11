import Head from 'next/head'
import Link from 'next/link'
import Navigation from './navigation'
import styles from './layout.module.scss'

const name = 'Sara Kevorkian'
export const siteTitle = 'Sara Kevorkian'

//Todo: add analytics and GDPR cookie stuff

export default function Layout({ children, home, nav }) {
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
        <script defer src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" integrity="sha384-haqrlim99xjfMxRP6EWtafs0sB1WKcMdynwZleuUSwJR0mDeRYbhtY+KPMr+JL6f" crossorigin="anonymous"></script>
      </Head>
      <header className={styles.header}>
        <Navigation nav={nav}/>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div>Favicon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
  )
}