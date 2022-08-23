import Link from 'next/link';
import styles from '../styles/components/Footer.module.css'

import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li className={styles.name}>Heart Kids Academy</li>
                <li><Link href='/'><a>Home</a></Link></li>
                <li><Link href='/about'><a>About Us</a></Link></li>
                <li><Link href='/tour'><a>Get a Tour</a></Link></li>
                <li><Link href='/contact'><a>Contact Us</a></Link></li>
                <li className={styles.socials}>
                    <div><a href='https://www.facebook.com/heartkidsacademy/' target='_blank' rel="noreferrer" aria-label='Facebook'><FaFacebookSquare /></a></div>
                    <div><a href='https://www.instagram.com/heartkidsacademy/' target='_blank' rel="noreferrer" aria-label='Instagram'><FaInstagramSquare /></a></div>
                </li>
            </ul>
        </footer>
    )
}