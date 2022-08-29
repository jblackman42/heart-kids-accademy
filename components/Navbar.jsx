import { useState, useEffect } from 'react';

import styles from '../styles/components/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/HeartKidsAcademyLogo.svg';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { TiSocialSkype } from 'react-icons/ti'

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)

    // useEffect(() => {
    //     console.log(navOpen)
    // }, [navOpen])

    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.logo}>
                    <Link href="/" className={styles.logoLink}>
                        <a className={styles.logoLink}>
                            <Image
                                src={logo}
                                alt="Heart Kids Academy Logo"
                                className='navLogo'
                                width={100}
                                height={100}
                            />
                        </a>
                    </Link>
                    <GiHamburgerMenu className={styles.menuBtn} onClick={() => setNavOpen(!navOpen)} />
                </li>
                <ul className={`${styles.links} ${!navOpen ? styles.closed : ''}`} >
                    <li><Link href="/">home</Link></li>
                    <li><Link href="/">about us</Link></li>
                    <li><Link href="/">get a tour</Link></li>
                    <li><Link href="/">contact us</Link></li>
                    <li className={styles.socials}>
                        <a href='https://www.facebook.com/heartkidsacademy/' target='_blank' rel="noreferrer" aria-label='Facebook' className={styles.socialIcon}><FaFacebookSquare /></a>
                        <a href='https://www.instagram.com/heartkidsacademy/' target='_blank' rel="noreferrer" aria-label='Instagram' className={styles.socialIcon}><FaInstagramSquare /></a>
                    </li>
                </ul>
            </ul>
        </nav>
    )
}