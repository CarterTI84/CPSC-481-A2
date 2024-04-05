'use client'

import ResponsiveImage from "@/components/ResponsiveImage"
import styles from "./index.module.css"
import Image from "next/image"

type Props = {
    tutorialSlide: {
        id: string,
        image: string,
        description: string
    }
}

export default function TutorialSlide({ tutorialSlide }: Props) {
    const { id, image, description } = tutorialSlide

    return (
        <div className={styles.container}>
            <ResponsiveImage src={image} width={350} height={550} alt={`tutorial-${id}`} />
            <p className={styles.description}>{description}</p>

        </div>
    )
}