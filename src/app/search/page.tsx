import { ActivityType } from '@/types/Activity'
import styles from './page.module.css'
import Activity from '@/components/Activity'
import { activities as results } from '~/mockData/Activities'

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
    console.log("given activity", activity)
    return (
        <div className={styles.container}>
            <TopBar activityName={activity} />
            <div className={styles.activitiesContainer}>
                {results.map(result => <ResultCard key={result.id} result={result} />)}
            </div>
        </div>
    )
}