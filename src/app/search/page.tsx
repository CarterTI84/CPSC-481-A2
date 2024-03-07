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

const TopBar = () => {
    return (
        <center className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <div className={styles.navbarContent}>
                    Search results: Outdoors
                </div>
            </div>
        </center>
    )
}

export default function Search() {
    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.activitiesContainer}>
                {results.map(result => <ResultCard key={result.id} result={result} />)}
            </div>
        </div>
    )
}