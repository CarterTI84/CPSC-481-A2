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
                    pictures: ['/assets/banff.jpg'],
                    description: "Experience the thrill of world-class skiing in Banff, nestled amidst the stunning peaks of the Canadian Rockies. Renowned for its powder-filled slopes and breathtaking scenery, Banff offers an unforgettable winter sports adventure for skiers of all levels. From gentle slopes perfect for beginners to challenging terrain for seasoned experts, there's something for everyone on Banff's slopes. After a day of carving through pristine snow, relax and unwind in cozy mountain lodges or indulge in après-ski activities in the charming town of Banff. Whether you're a seasoned skier or new to the sport, Banff promises an exhilarating and memorable winter getaway."
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