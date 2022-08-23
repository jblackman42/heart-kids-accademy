import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Tour.module.css'

import { Layout } from '../components/index';

export default function Tour() {
  return (
    <>
      <Head>
        <title>Get a Tour - Heart Kids Academy</title>
        <meta property="og:title" content="Get a Tour - Heart Kids Academy" />
      </Head>
      <Layout>
        <div className={styles.paragraphContainer}>
          <h1 className={styles.title}>Schedule A Tour</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ex sit animi commodi ipsa corporis neque itaque, ducimus sunt minus vel reprehenderit, fugit eligendi quos culpa alias doloremque perspiciatis est dolorem adipisci nostrum aliquam molestias nam? Ipsa facilis reiciendis corporis.</p>
          <a href='tel:1234567890' className={styles.btn}>Call Us</a>
        </div>
        <div className={styles.paragraphContainer}>
          <h1 className={styles.title}>Online Tour</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ex sit animi commodi ipsa corporis neque itaque, ducimus sunt minus vel reprehenderit, fugit eligendi quos culpa alias doloremque perspiciatis est dolorem adipisci nostrum aliquam molestias nam? Ipsa facilis reiciendis corporis.</p>
          <div className={styles.videoContainer}>
            <iframe className={styles.video} src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fheartkidsacademy%2Fvideos%2F866398437210125%2F&show_text=false&width=560&t=0" width="560" height="314" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
          </div>
        </div>
      </Layout>
    </>
  )
}
