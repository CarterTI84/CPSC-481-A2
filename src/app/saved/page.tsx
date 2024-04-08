'use client'

import { ActivityType } from '@/types/Activity'
import styles from './page.module.css'
import Activity from '@/components/Activity'
import { activities as results } from '~/mockData/Activities'
import PaddedContainer from '@/components/PaddedContainer'
import useActivitiesContext from '@/hooks/useActivitiesContext'

type ResultCardProps = {
    result: ActivityType
}
const ResultCard = ({ result }: ResultCardProps) => {
    return (
        <div className={styles.resultCard}>
            <Activity activity={result} showHeart={true} />
        </div>
    )
}

const TopBar = () => {
    return (
        <center className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <div className={styles.navbarContent}>
                    Your saved activities
                </div>
            </div>
        </center>
    )
}

export default function Saved() {
    const { savedActivities } = useActivitiesContext();

    return (
        <PaddedContainer>
            <div className={styles.container}>
                <TopBar />
                <div className={styles.activitiesContainer}>
                    {savedActivities.map(result => <ResultCard key={result.id} result={result} />)}
                </div>
            </div>
        </PaddedContainer>
    )
}