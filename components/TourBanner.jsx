import Link from 'next/link';
import styles from '../styles/components/TourBanner.module.css'

export default function Footer() {
    return (
        <Link href='/contact'>
            <div className={styles.infoBanner}>
                <h1>Schedule A Tour Now</h1>
                <p>At Heart Kids Academy children will experience hands on learning and play in an inspiring, exciting, developmentally appropriate environment. Our mission is to provide a positive foundation in an environment where learning is fun.</p>
            </div>
        </Link>
    )
}