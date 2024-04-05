'use client'

import Image from 'next/image'
import { CSSProperties, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
    src: string,
    width: number,
    height: number,
    priority?: boolean,
    alt?: string,
    containerStyles?: CSSProperties
}
export default function ResponsiveImage({ src, alt, containerStyles = {}, width, height, priority = false }: Props) {
    const [transformScale, setTransformScale] = useState({ previous: 0.2, next: 0.2 });

    useEffect(() => {
        const handleResize = () => {
            setTransformScale(old => {
                const { previous, next } = old;
                return ({ previous: next, next: (window.innerHeight * 0.3 / height) })
            });
        }
        if(window) {
            handleResize()
            window.addEventListener('resize', handleResize)
        }
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <motion.div 
            initial={{
                width: `${width * transformScale.previous}px`,
                height: `${height * transformScale.previous}px`
            }}
            animate={{ 
                width: `${width * transformScale.next}px`,
                height: `${height * transformScale.next}px`
            }}
            style={{
                ...containerStyles,
                width: `${width * transformScale.next}px`,
                height: `${height * transformScale.next}px`,
                overflow: 'hidden'
            }}
        >
            <Image 
                width={transformScale.next * width}
                height={transformScale.next * height}
                priority={priority}
                alt={alt ?? src}
                src={src}
            />
        </motion.div>
    )
}