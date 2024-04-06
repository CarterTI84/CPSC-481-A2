'use client'

import { useEffect, useState } from 'react'

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ width: 375, height: 667 });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        if(window) {
            handleResize();
            window.addEventListener('resize', handleResize)
        }           
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowSize
}