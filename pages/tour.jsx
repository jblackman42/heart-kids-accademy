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
          <p>To schedule a tour of Heart Kids Academy please call or email using the buttons below. Let us know you are interested in touring our facility and one of our staff members will reach out to you.</p>
          {/* <div className={styles.btnContainer}>
            <a href='tel:1234567890' className={styles.btn}>Call Us</a>
            <a href='mailto:info@heartkidsacademy.org' className={styles.btn}>Email Us</a>
          </div> */}
          <address className={styles.contactInfo}>
            <p><strong>Phone Number:</strong> <a href="tel:602-732-6283">(602) 732-6283</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@heartkidsacademy.org">info@heartkidsacademy.org</a></p>
          </address>
        </div>
        <div className={styles.paragraphContainer}>
          <h1 className={styles.title}>Online Tour</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ex sit animi commodi ipsa corporis neque itaque, ducimus sunt minus vel reprehenderit, fugit eligendi quos culpa alias doloremque perspiciatis est dolorem adipisci nostrum aliquam molestias nam? Ipsa facilis reiciendis corporis.</p>
          <div className={styles.videoContainer}>
            <iframe className={styles.video} src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fheartkidsacademy%2Fvideos%2F866398437210125%2F&show_text=false&width=560&t=0" width="560" height="314" title='Facebook virtual tour video' scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
          </div>
        </div>
      </Layout>
    </>
  )
}
