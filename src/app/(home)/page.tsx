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
        description: `Access the search page by pressing the "Search" button on the bottom of the screen. Then search attractions by pressing a filter button in the middle of the screen or search by a keyword using the search bar at the top.`
    },
    {
        id: "2",
        image: "/assets/BrowsePage.png",
        description: `Select an attraction from the list of search results. You can save an attraction to view it later by pressing the save button. Your saved events can be view by pressing the "Saved" button at the bottom of the screen.`
    },
    {
        id: "3",
        image: "/assets/BrowsePage.png",
        description: `An activity can be book and scheduled by pressing the schedule button and giving the information required on screen, you can view your scheduled attractions by pressing the "Schedule" button on the bottom of the screen.`
    },
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