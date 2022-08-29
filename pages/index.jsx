import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/pages/Home.module.css'

// import favicon from '../assets/HeartKidsAcademyLogo.ico';
import logo from '../public/assets/HeartKidsAcademyLogo.svg';
import image1 from '../public/assets/example.jpg';
import image2 from '../public/assets/istockphoto.jpg';
import image3 from '../public/assets/example2.jpg';

// import { Navbar, Banner, Slideshow, Footer, TourBanner, Pictures } from '../components/index';
import { Layout, Slideshow, Footer, TourBanner, Pictures } from '../components/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Heart Kids Academy</title>
        <meta property="og:title" content="Heart Kids Academy" />
        {/* <link rel="shortcut icon" href={favicon} type="image/x-icon" /> */}
      </Head>
      <Layout>
        <div className={styles.paragraphContainer}>
          <h1 className={styles.title}>Website under construction</h1>
        </div>
      </Layout>
    </>
  )
}
