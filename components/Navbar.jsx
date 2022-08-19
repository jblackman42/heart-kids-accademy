import { useState, useEffect } from 'react';

import styles from '../styles/components/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/HeartKidsAcademyLogo.svg';

import { GiHamburgerMenu } from 'react-icons/gi'

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
                    <GiHamburgerMenu className='menuBtn' onClick={() => setNavOpen(!navOpen)} />
                </li>
                <ul className={`${styles.links} ${!navOpen ? styles.closed : ''}`} >
                    <li><Link href="/">home</Link></li>
                    <li><Link href="/about">who we are</Link></li>
                    <li><Link href="/tour">get a tour</Link></li>
                    <li><Link href="/contact">contact us</Link></li>
                </ul>
            </ul>
        </nav>
    )
}