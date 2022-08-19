import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'

// import favicon from '../assets/HeartKidsAcademyLogo.ico';
import logo from '../public/HeartKidsAcademyLogo.svg';
import { Navbar, Banner } from '../components/index';

export default function Tour() {
  return (
    <>
      <Head>
        <title>Get a Tour - Heart Kids Academy</title>
        <meta property="og:title" content="Get a Tour - Heart Kids Academy" />
      </Head>
      <div className={styles.container}>
        <Navbar />
        <Banner />
        <h1>This is a test</h1>
        <h1>What to Expect</h1>
      </div>
    </>
  )
}
