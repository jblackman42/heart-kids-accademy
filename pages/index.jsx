import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/pages/Home.module.css'

import favicon from '../assets/HeartKidsAcademyLogo.ico';
import logo from '../assets/HeartKidsAcademyLogo.svg';
import image1 from '../assets/example.jpg';
import image2 from '../assets/istockphoto.jpg';

import { Navbar, Banner, Slideshow, Footer, TourBanner } from '../components/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Heart Kids Academy</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <meta name="description" content="At Heart Kids Academy children will experience hands on learning and play in an inspiring, exciting, developmentally appropriate environment. Our mission is to provide a positive foundation for learning in a faith-based environment where learning is fun." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Home - Heart Kids Academy" />
        <meta property="og:description" content="At Heart Kids Academy children will experience hands on learning and play in an inspiring, exciting, developmentally appropriate environment. Our mission is to provide a positive foundation for learning in a faith-based environment where learning is fun." />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://www.heartkidsacademy.org/" />
        <meta property="og:site_name" content="HeartKidsAcademy" />

        <meta name="twitter:title" content="Home - Heart Kids Academy" />
        <meta name="twitter:description" content="At Heart Kids Academy children will experience hands on learning and play in an inspiring, exciting, developmentally appropriate environment. Our mission is to provide a positive foundation for learning in a faith-based environment where learning is fun." />
        <meta name="twitter:image" content={logo} />
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
