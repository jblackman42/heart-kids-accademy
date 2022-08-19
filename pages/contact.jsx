import Head from 'next/head'
import styles from '../styles/pages/Contact.module.css'

// import favicon from '../assets/HeartKidsAcademyLogo.ico';
import logo from '../public/HeartKidsAcademyLogo.svg';
import { Navbar, Banner, TourBanner, Footer } from '../components/index';

export default function Contact() {
  return (
    <>
      <Head>
        <Head>
          <title>Contact Us - Heart Kids Academy</title>
          <meta property="og:title" content="Contact Us - Heart Kids Academy" />
        </Head>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <Banner />

        <div className={styles.contactInfo}>
          <div className={styles.row}>
            <h1>Location</h1>
            <p>Pure Heart Church, Glendale</p>
          </div>
          <div className={styles.row}>
            <h1>Phone</h1>
            <p>(602) 732 - 6283</p>
          </div>
          <div className={styles.row}>
            <h1>Email</h1>
            <p>Email@pureheart.org</p>
          </div>
        </div>

        <TourBanner />
        <Footer />
      </div>
    </>
  )
}
