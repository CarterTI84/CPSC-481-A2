import styles from './page.module.css'
import '@/'

const activities = [
    {
        id: 1,
        name: 'Banff Skiing',
        rating: 4.5,
        picture: '~/assets/banff.jpg'
    }
]

export default function Activities() {
    return (
        <div className={styles.container}>

        </div>
    )
}