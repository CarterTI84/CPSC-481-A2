'use client'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TutorialSlide from './TutorialSlide';
import styles from "./layout.module.css"
import { useMemo } from 'react';
import useHomeContext from '@/hooks/useHomeContext';

const tutorials = [
    {
        id: "1",
        image: "/assets/BrowsePage.png",
        description: `Search activities by keyword or a button press.`
    },
    {
        id: "2",
        image: "/assets/SearchPage.png",
        description: `View or save an activity.`
    },
    {
        id: "3",
        image: "/assets/BookTut.png",
        description: `Book an activity, review it after!`
    }
]

const Arrow = () => null

export default function Home() {
    const { sliderRef, updateCurrentSlide } = useHomeContext();

    

    const settings = useMemo(() => ({
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        prevArrow: <Arrow />,
        nextArrow: <Arrow />,
        afterChange: (/* current: number,  */next: number) => {
            updateCurrentSlide(next)
        }
    }), [])

    return (
        <div className={styles.homeContainer}>
            <Slider ref={sliderRef} {...settings}>
                {tutorials.map(tutorial => (
                    <TutorialSlide key={tutorial.id} tutorialSlide={tutorial} />
                ))}
            </Slider>
        </div>
    );
}