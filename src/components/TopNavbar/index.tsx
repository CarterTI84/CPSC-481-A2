import SearchBar from './SearchBar'
import styles from './index.module.css'

export default function TopNavbar() {
    return (
        <center className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <SearchBar />
            </nav>
        </center>
    )
}