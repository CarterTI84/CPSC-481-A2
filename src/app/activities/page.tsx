import Activity from '@/components/Activity'
import styles from './page.module.css'
import { ActivityType } from '@/types/Activity'
import { activities } from '~/mockData/Activities'
import PaddedContainer from '@/components/PaddedContainer'

type ActivityCardProps = {
    activity: ActivityType
}
const ActivityCard = ({ activity }: ActivityCardProps) => {
    return (
        <div className={styles.activityCard}>
            <Activity activity={activity} />
        </div>
    )
}

export default function Activities() {
    return (
        <PaddedContainer>
            <h1 style={{ color: 'white' }}>Activities</h1>
            <div className={styles.activitiesContainer}>
                {activities.map(activity => <ActivityCard key={activity.id} activity={activity} />)}
            </div>
        </PaddedContainer>
    )
}