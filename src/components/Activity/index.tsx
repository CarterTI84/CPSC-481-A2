import { ActivityType } from "@/types/Activity"
import styles from './index.module.css'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import Heart from '@/components/Heart'

type Props = {
    activity: ActivityType
}

export default function Activity({ activity }: Props) {
    const { name, rating, picture } = activity
    return (
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
                    <Heart />
                </div>
            </div>
        </div>
    )
}