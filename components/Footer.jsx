import Link from 'next/link';
import styles from '../styles/components/Footer.module.css'

import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li className={styles.name}>Heart Kids Academy</li>
                <li><Link href='/'><a>Home</a></Link></li>
                <li><Link href='/about'><a>Who We Are</a></Link></li>
                <li><Link href='/tour'><a>Get a Tour</a></Link></li>
                <li><Link href='/contact'><a>Contact Us</a></Link></li>
                <div className={styles.socials}>
                    <li><a href='https://www.facebook.com/heartkidsacademy/' target='_blank' rel="noreferrer"><FaFacebookSquare /></a></li>
                    <li><a href='https://www.instagram.com/heartkidsacademy/' target='_blank' rel="noreferrer"><FaInstagramSquare /></a></li>
                </div>
            </ul>
        </footer>
    )
}