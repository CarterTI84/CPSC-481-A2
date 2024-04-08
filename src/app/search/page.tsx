'use client'

import { ActivityType } from '@/types/Activity'
import styles from './page.module.css'
import Activity from '@/components/Activity'
import PaddedContainer from '@/components/PaddedContainer'
import useActivitiesContext from '@/hooks/useActivitiesContext'

type ResultCardProps = {
    result: ActivityType
}
const ResultCard = ({ result }: ResultCardProps) => {
    return (
        <div className={styles.resultCard}>
            <Activity activity={result} />
        </div>
    )
}

const TopBar = ({ activityName }: { activityName: string }) => {
    return (
        <center className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <div className={styles.navbarContent}>
                    {`Search results: ${activityName}`}
                </div>
            </div>
        </center>
    )
}


export default function Search({ searchParams: { activity } }: { searchParams: { activity: string } }) {
    const { getResults } = useActivitiesContext();

    return (
        <PaddedContainer>
            <div className={styles.container}>
                <TopBar activityName={activity} />
                <div className={styles.activitiesContainer}>
                    {getResults(activity ?? "").map(result => <ResultCard key={result.id} result={result} />)}
                </div>
            </div>
        </PaddedContainer>
    )
}