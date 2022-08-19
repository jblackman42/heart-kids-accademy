import Link from 'next/link';
import styles from '../styles/components/TourBanner.module.css'

export default function Footer() {
    return (
        <Link href='/contact'>
            <div className={styles.infoBanner}>
                <h1>Schedule A Tour Now</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta sint ipsam nam neque quaerat eius tempore, aspernatur consequatur impedit.</p>
            </div>
        </Link>
    )
}