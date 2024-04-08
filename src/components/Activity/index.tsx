'use client'

import { ActivityType } from "@/types/Activity"
import styles from './index.module.css'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import Heart from '@/components/Heart'
import Link from "next/link";
import useActivitiesContext from "@/hooks/useActivitiesContext";

type Props = {
    activity: ActivityType,
    showHeart?: boolean
}

export default function Activity({ activity, showHeart = true }: Props) {
    const { name, rating, pictures } = activity

    const { isSaved, addActivityToSaved, removeSavedActivity } = useActivitiesContext();

    const heartIsChecked = isSaved(activity.id)

    const handleHeartClick = () => {
        if(heartIsChecked)
            removeSavedActivity(activity.id)
        else
            addActivityToSaved(activity)
    }

    return (
        <div className={styles.container}>
            <Link href={`/activities/${activity.name}`}>
                <div className={styles.imageSection}>
                    <Image alt={pictures[0]} src={pictures[0]} width={390} height={200} />
                </div>
            </Link>
            <div className={styles.descriptionSection}>
                <div className={styles.leftDescriptionSection}>
                    <h3>{name}</h3>
                    <Rating name="read-only" value={rating} precision={0.5} readOnly />
                    <span>{rating}</span>
                </div>
                <div className={styles.rightDescriptionSection}>
                    {showHeart && <Heart checked={heartIsChecked} onClick={handleHeartClick} />}
                </div>
            </div>
        </div>
    )
}