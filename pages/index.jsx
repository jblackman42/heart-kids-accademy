import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/pages/Home.module.css'

import logo from '../assets/HeartKidsAcademyLogo.svg';
import image1 from '../assets/example.jpg';
import image2 from '../assets/istockphoto.jpg';

import { Navbar, Banner, Slideshow, Footer, TourBanner } from '../components/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
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
