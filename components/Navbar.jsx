import {useState, useEffect} from 'react';

import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import logo from '../assets/HeartKidsAcademyLogo.svg'

import {GiHamburgerMenu} from 'react-icons/gi'

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        console.log(navOpen)
    }, [navOpen])

    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <a href="/">
                        <Image 
                            src={logo}
                            alt="Heart Kids Academy Logo"
                            className='navLogo'
                            width={100}
                            height={100}
                        />
                    </a>
                    <GiHamburgerMenu className='menuBtn' onClick={() => setNavOpen(!navOpen)}/>
                </li>
                <ul className={`${styles.links} ${!navOpen ? styles.closed : ''}`} >
                    <li><a href="/">homepage</a></li>
                    <li><a href="/register">register your child</a></li>
                    <li><a href="/about">who we are</a></li>
                    <li><a href="/expectations">what you can expect</a></li>
                    <li><a href="/moreinfo">get more info</a></li>
                    <li><a href="/contact">contact us</a></li>
                </ul>
            </ul>
        </nav>
    )
}