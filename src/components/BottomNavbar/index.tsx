import RouteItem from './RouteItem'
import styles from './index.module.css'

type RouteType = 'browse' | 'schedule' | 'saved'
const routes: RouteType[] = ['browse', 'schedule', 'saved']

export default function BottomNavbar() {
    return (
        <center className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <div className={styles.routesContainer}>
                    {routes.map((route, index) => <RouteItem key={index} route={route} />)}
                </div>
            </nav>
        </center>
    )
}