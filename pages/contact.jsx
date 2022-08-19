import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <Banner />
        <h1>This is a test</h1>
        <h1>Contact</h1>
      </div>
    </>
  )
}
