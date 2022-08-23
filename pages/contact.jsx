import Head from 'next/head'
import styles from '../styles/pages/Contact.module.css'

import { Layout, TourBanner } from '../components/index';

export default function Contact() {
  return (
    <>
      <Head>
        <Head>
          <title>Contact Us - Heart Kids Academy</title>
          <meta property="og:title" content="Contact Us - Heart Kids Academy" />
        </Head>
      </Head>
      <Layout>
        <div className={styles.contactInfo}>
          <h1 className={styles.title}>Contact Info</h1>
          <div className={styles.row}>
            <h1>Location</h1>
            <p>Pure Heart Church, Glendale</p>
          </div>
          <div className={styles.row}>
            <h1>Phone</h1>
            <p><a href="tel:602-732-6283">(602) 732-6283</a></p>
          </div>
          <div className={styles.row}>
            <h1>Email</h1>
            <p><a href="mailto: example@pureheart.org">Email@pureheart.org</a></p>
          </div>
        </div>
        
        <div className={styles.paragraphContainer}>
          <h1 className={styles.title}>Hours</h1>
          <table>
            <tbody>
              <tr>
                <th>Sunday</th>
                <td>Closed</td>
              </tr>
              <tr>
                <th>Monday</th>
                <td>6:30am-5:30pm</td>
              </tr>
              <tr>
                <th>Tuesday</th>
                <td>6:30am-5:30pm</td>
              </tr>
              <tr>
                <th>Wednesday</th>
                <td>6:30am-5:30pm</td>
              </tr>
              <tr>
                <th>Thursday</th>
                <td>6:30am-5:30pm</td>
              </tr>
              <tr>
                <th>Friday</th>
                <td>6:30am-5:30pm</td>
              </tr>
              <tr>
                <th>Saturday</th>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <TourBanner />
      </Layout>
    </>
  )
}
