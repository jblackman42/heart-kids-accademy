import Head from 'next/head'
import styles from '../styles/pages/Contact.module.css'

// import favicon from '../assets/HeartKidsAcademyLogo.ico';
import logo from '../assets/HeartKidsAcademyLogo.svg';
import { Navbar, Banner, TourBanner, Footer } from '../components/index';

export default function Contact() {
  return (
    <>
      <Head>
        <Head>
          <title>Contact Us - Heart Kids Academy</title>
          {/* <link rel="shortcut icon" href={favicon} type="image/x-icon" /> */}
          <meta name="description" content="At Heart Kids Academy children will experience hands on learning and play in an inspiring, exciting, developmentally appropriate environment. Our mission is to provide a positive foundation for learning in a faith-based environment where learning is fun." />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Contact Us - Heart Kids Academy" />
          <meta property="og:description" content="At Heart Kids Academy children will experience hands on learning and play in an inspiring, exciting, developmentally appropriate environment. Our mission is to provide a positive foundation for learning in a faith-based environment where learning is fun." />
          <meta property="og:image" content={logo} />
          <meta property="og:url" content="https://www.heartkidsacademy.org/" />
          <meta property="og:site_name" content="HeartKidsAcademy" />

          <meta name="twitter:title" content="Contact Us - Heart Kids Academy" />
          <meta name="twitter:description" content="At Heart Kids Academy children will experience hands on learning and play in an inspiring, exciting, developmentally appropriate environment. Our mission is to provide a positive foundation for learning in a faith-based environment where learning is fun." />
          <meta name="twitter:image" content={logo} />
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
