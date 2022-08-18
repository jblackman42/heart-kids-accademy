import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'

import logo from '../assets/HeartKidsAcademyLogo.svg';
import image1 from '../assets/example.jpg';
import image2 from '../assets/istockphoto.jpg';

import {Navbar, Banner, Slideshow} from '../components/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <Banner />
        <Slideshow imgs={[logo, image1, image2]} autoscroll={true}/>

        <a href='/contact' className={styles.infoBanner}>
          <h1>Schedule A Tour Now</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta sint ipsam nam neque quaerat eius tempore, aspernatur consequatur impedit.</p>
        </a>
      </div>
    </>
  )
}
