import Head from 'next/head'
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
          property="og:description"
          content="Sara Kevorkian portfolio front end web developer seattle wa"
        />
        <meta
          property="og:image"
          content="/images/self.jpg"
        />
        <link rel="image_src" href="/images/self.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Benne&display=fallback" rel="stylesheet" />
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