
import { useState, useEffect, useReducer } from 'react';
import Image from 'next/image';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillCircleFill } from 'react-icons/bs';
import styles from '../styles/components/Slideshow.module.css';

const autoscrollDelay = 5000;
let autoscrollTimer;
let isAutoscrolling = true;


export default function Slideshow(props) {
    const { imgs: images, autoscroll = false } = props;
    const [currImage, setCurrImage] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)

    clearInterval(autoscrollTimer)
    autoscrollTimer = setInterval(() => {
        if (currImage >= images.length - 1 && isAutoscrolling && autoscroll) {
            setCurrImage(0)
        } else if (isAutoscrolling && autoscroll) {
            setCurrImage(currImage + 1)
        }
    }, autoscrollDelay)

    const stopAutoscroll = () => {
        console.log('stop')
        isAutoscrolling = false;

        setTimeout(() => startAutoscroll(), 10000)
    }
    const startAutoscroll = () => {
        console.log('start')
        isAutoscrolling = true;
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }
    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            stopAutoscroll();
            scrollLeft();
        }

        if (diff < -5) {
            stopAutoscroll();
            scrollRight();
        }

        setTouchPosition(null)
    }

    const scrollRight = () => {
        if (autoscroll) stopAutoscroll()
        if (currImage >= images.length - 1) {
            setCurrImage(0)
        } else {
            setCurrImage(currImage + 1)
        }
    }

    const scrollLeft = () => {
        if (autoscroll) stopAutoscroll()
        if (currImage <= 0) {
            setCurrImage(images.length - 1)
        } else {
            setCurrImage(currImage - 1)
        }
    }
    if (!images) return <></>
    return (
        <>
            <div className={styles.slideshow} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                <div className={styles.arrowLeft} onClick={() => scrollLeft()}>
                    <AiOutlineArrowLeft />
                </div>
                <div className={styles.arrowRight} onClick={() => scrollRight()}>
                    <AiOutlineArrowRight />
                </div>
                {images && images.map((image, index) => {
                    return (
                        <div className={`${styles.slideContainer} ${currImage == index ? styles.active : ''}`} key={index}>
                            <div className={styles.imgContainer}>
                                <Image
                                    src={image}
                                    alt="slideshow image"
                                    layout='fill'
                                    priority={true}
                                // height={image.height}
                                // width={image.width}
                                />
                                {/* <h1>test</h1> */}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.navigation}>
                {images && images.map((image, index) => {
                    return (
                        <BsFillCircleFill key={index} className={currImage == index ? styles.selected : ''} onClick={() => { setCurrImage(index); stopAutoscroll() }} />
                    )
                })}
            </div>
        </>
    )
}