import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/pages/Home.module.css'

// import favicon from '../assets/HeartKidsAcademyLogo.ico';
import logo from '../public/HeartKidsAcademyLogo.svg';
import image1 from '../public/example.jpg';
import image2 from '../public/istockphoto.jpg';

import { Navbar, Banner, Slideshow, Footer, TourBanner } from '../components/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Heart Kids Academy</title>
        {/* <link rel="shortcut icon" href={favicon} type="image/x-icon" /> */}
      </Head>
      <div className={styles.container}>
        <Navbar />
        <Banner />
        <Slideshow imgs={[logo, image1, image2]} autoscroll={true} />

        <TourBanner />



        <Footer />

      </div>
    </>
  )
}
