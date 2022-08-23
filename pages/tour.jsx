import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'

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
        
      </div>
    </>
  )
}
