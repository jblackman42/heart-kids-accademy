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
        <Slideshow imgs={[logo, image1, image2, image3]} autoscroll={true} />

        <TourBanner />

        <div className={styles.paragraphContainer}>
          <h1>Who We Are</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ex sit animi commodi ipsa corporis neque itaque, ducimus sunt minus vel reprehenderit, fugit eligendi quos culpa alias doloremque perspiciatis est dolorem adipisci nostrum aliquam molestias nam? Ipsa facilis reiciendis corporis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor optio mollitia expedita adipisci delectus tempore vero dolores obcaecati numquam porro?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eum. Explicabo provident, eligendi ea blanditiis ipsa temporibus sed facere modi.</p>
        </div>

        <Pictures imgs={[image1, image1, image1]} />
      </Layout>
    </>
  )
}
