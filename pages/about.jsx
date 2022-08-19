import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/About.module.css'

import { Navbar, Banner, TourBanner, Footer } from '../components/index';

import logo from '../assets/HeartKidsAcademyLogo.svg';
import image from '../assets/example.jpg';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Heart Kids Academy</title>
        <meta name="description" content="At Heart Kids Academy children will experience hands on learning and play in an inspiring, exciting, developmentally appropriate environment. Our mission is to provide a positive foundation for learning in a faith-based environment where learning is fun." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="About - Heart Kids Academy" />
        <meta property="og:description" content="At Heart Kids Academy children will experience hands on learning and play in an inspiring, exciting, developmentally appropriate environment. Our mission is to provide a positive foundation for learning in a faith-based environment where learning is fun." />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://www.heartkidsacademy.org/" />
        <meta property="og:site_name" content="HeartKidsAcademy" />

        <meta name="twitter:title" content="About - Heart Kids Academy" />
        <meta name="twitter:description" content="At Heart Kids Academy children will experience hands on learning and play in an inspiring, exciting, developmentally appropriate environment. Our mission is to provide a positive foundation for learning in a faith-based environment where learning is fun." />
        <meta name="twitter:image" content={logo} />
      </Head>
      <div className={styles.container}>
        <Navbar />
        <Banner />

        <div className={styles.paragraphContainer}>
          <h1>Who We Are</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ex sit animi commodi ipsa corporis neque itaque, ducimus sunt minus vel reprehenderit, fugit eligendi quos culpa alias doloremque perspiciatis est dolorem adipisci nostrum aliquam molestias nam? Ipsa facilis reiciendis corporis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor optio mollitia expedita adipisci delectus tempore vero dolores obcaecati numquam porro?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eum. Explicabo provident, eligendi ea blanditiis ipsa temporibus sed facere modi.</p>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt="slideshow image"
            layout='fill'
            priority={true}
          />
        </div>

        <TourBanner />

        <Footer />

      </div>
    </>
  )
}
