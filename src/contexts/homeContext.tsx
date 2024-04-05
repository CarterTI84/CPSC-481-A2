'use client'

import { PropsWithChildren, RefObject, createContext, useCallback, useRef, useState } from "react";
import Slider from "react-slick";

type contextObject = {
    isLastSlide: boolean,
    sliderRef: RefObject<Slider>,
    updateCurrentSlide: (arg: number) => void,
    goToNextSlide: () => void
    goToPreviousSlide: () => void
}
const HomeContext = createContext<contextObject | null>(null);

const maximumSlideNumber = 2

export function HomeContextProvider({ children }: PropsWithChildren) {
    const sliderRef = useRef<Slider>(null);
    const goToSlide = (slideNo: number) => {
        if(sliderRef.current)
            sliderRef.current.slickGoTo(slideNo)
    }

    const [currentSlide, setCurrentSlide] = useState(0);

    const updateCurrentSlide = useCallback((arg: number) => {
        setCurrentSlide(arg)
    }, [])

    const goToNextSlide = useCallback(() => {
        setCurrentSlide(slide => {
            if(slide < maximumSlideNumber) {
                let newSlide = slide + 1;
                goToSlide(newSlide)
                return newSlide
            }
            return slide
        })
    }, [setCurrentSlide])

    const goToPreviousSlide = useCallback(() => {
        setCurrentSlide(slide => {
            if(slide > 0) {
                let newSlide = slide - 1
                goToSlide(newSlide)
                return newSlide
            }
            return slide
        })
    }, [setCurrentSlide])

    const isLastSlide = currentSlide === maximumSlideNumber;

    return (
        <HomeContext.Provider 
            value={{ sliderRef,
                isLastSlide, updateCurrentSlide,
                goToNextSlide, goToPreviousSlide
            }}
        >
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContext