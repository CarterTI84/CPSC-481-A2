import { ActivityType } from "@/types/Activity"
import styles from './index.module.css'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import Heart from '@/components/Heart'
import Link from "next/link";

type Props = {
    activity: ActivityType,
    showHeart?: boolean
}

export default function Activity({ activity, showHeart }: Props) {
    const { name, rating, picture } = activity
    return (
        <Link href={`/activities/${activity.name}`}>
            <div className={styles.container}>
                <div className={styles.imageSection}>
                    <Image alt={picture} src={picture} width={390} height={200} />
                </div>
                <div className={styles.descriptionSection}>
                    <div className={styles.leftDescriptionSection}>
                        <h3>{name}</h3>
                        <Rating name="read-only" value={rating} precision={0.5} readOnly />
                        <span>{rating}</span>
                    </div>
                    <div className={styles.rightDescriptionSection}>
                        {showHeart && <Heart />}
                    </div>
                </div>
            </div>
        </Link>
    )
}