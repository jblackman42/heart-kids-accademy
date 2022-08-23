import styles from '../styles/pages/Error.module.css';
import Link from 'next/link'

export default function Custom404() {
    return (
        <div className={styles.errorPage}>
          {/* <h1 className="background">404</h1> */}
          <div className={styles.content}>
            <h1>Page not found</h1>
            <p>{`We can't seem to find the page you are looking for.`}</p>
            <button><Link href="/">Return To Homepage</Link></button>
          </div>
        </div>
    );
}