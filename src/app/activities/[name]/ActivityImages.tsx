'use client'

import Image from 'next/image';
import styles from "./page.module.css"

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMemo, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

const getCenterPadding = (windowWidth: number) => {
    if(windowWidth < 376)
        return "20px"
    if(windowWidth < 386)
        return "25px"
    if(windowWidth < 400)
        return "29px"
    if(windowWidth < 430)
        return "35px"
    return "41px"
}

export default function ActivityImages({ images }: { images: string[] }) {
    const [activeSlide, setActiveSlide] = useState(0);

    const { width } = useWindowSize();
    const centerPadding = getCenterPadding(width)

    const settings = useMemo(() => ({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding,
        beforeChange: (current: number, next: number) => {
            setActiveSlide(next)
        }
    }), [centerPadding])

    return (
        <Slider {...settings}>
            {images.map((image, index) => 
                <div 
                    key={`${image}-${index}`}
                    className={`${styles.activityImage} ${activeSlide === index ? styles.active : ""}`}
                >
                    <Image 
                        src={image}
                        alt={`Activity-${image}`}
                        width={330} height={250} 
                    />
                </div>
            )}
        </Slider>
    )
}