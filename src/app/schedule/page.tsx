import Activity from '@/components/Activity'
import styles from './page.module.css'

const CardContainer = () => {
    return (
        <div className={styles.cardContainer}>
            <Activity 
                activity={{ 
                    id: '1',
                    name: 'Skiing', 
                    rating: 4,
                    picture: '/assets/banff.jpg',
                }}
            />
        </div>
    )
}

export default function page() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.topSection}>
                    <button>Previous</button>
                    <h1 style={{ color: 'white' }}>Today</h1>
                    <button>Next</button>
                </div>
                <h2 style={{ color: 'white' }}>Time: 14:20pm</h2>
                <CardContainer />
            </div>
        </div>
    )
}