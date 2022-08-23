import styles from '../styles/components/Pictures.module.css';
import Image from 'next/image';

import image from '../public/assets/example.jpg';

export default function Navbar(props) {
    const { imgs } = props;
    return (
        <div className={styles.picturesContainer}>
            {imgs.map((image, index) => {
                return (
                    <Image 
                        src={image}
                        alt="description of images"
                        className={styles.image}
                        key={index}
                        priority={true}
                    />
                )
            })}
        </div>
    )
}