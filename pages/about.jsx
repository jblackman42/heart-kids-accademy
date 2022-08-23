import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/About.module.css'

import { Layout, TourBanner } from '../components/index';

import image from '../public/assets/example.jpg';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Heart Kids Academy</title>
        <meta property="og:title" content="About - Heart Kids Academy" />
      </Head>
      <Layout>
        <div className={styles.paragraphContainer}>
          <h1 className={styles.title}>Our Mission</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ex sit animi commodi ipsa corporis neque itaque, ducimus sunt minus vel reprehenderit, fugit eligendi quos culpa alias doloremque perspiciatis est dolorem adipisci nostrum aliquam molestias nam? Ipsa facilis reiciendis corporis.</p>
        </div>
        <div className={styles.paragraphContainer}>
          <h1 className={styles.title}>About Us</h1>
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
