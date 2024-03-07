import { ButtonBase, IconButton } from '@mui/material';
import styles from './index.module.css'
import SearchIcon from '@mui/icons-material/Search';

export default function TopNavbar() {
    return (
        <center className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <div className={styles.searchbar}>
                    <IconButton sx={{ margin: '0 2px' }} className={styles.searchIcon}>
                        <SearchIcon htmlColor='#c9a461' sx={{
                            transform: 'rotate(-4deg)',
                            fontSize: '1.3rem'
                        }} />
                    </IconButton>
                    <div className={styles.inputContainer}>
                        <input placeholder='Search'/>
                    </div>
                </div>
            </nav>
        </center>
    )
}