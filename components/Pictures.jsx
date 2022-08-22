import styles from '../styles/components/Pictures.module.css';
import Image from 'next/image';
import Link from 'next/link';

import image from '../public/assets/example.jpg';

export default function Navbar() {
    return (
        <div className={styles.picturesContainer}>
        <Image 
            src={image}
            alt="description of image"
            className={styles.image}
        />
        <Image 
            src={image}
            alt="description of image"
            className={styles.image}
        />
        <Image 
            src={image}
            alt="description of image"
            className={styles.image}
        />
        </div>
    )
}