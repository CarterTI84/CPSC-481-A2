'use client'

import { IconButton } from '@mui/material';
import styles from './index.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const [userInput, setUserInput] = useState("")
    
    const router = useRouter();

    const goToSearchPage = () => {
        router.push(`/search?activity=${userInput}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        goToSearchPage();
    }

  return (
    <form className={styles.searchbar} onSubmit={handleSubmit}>
        <IconButton 
            sx={{ margin: '0 2px' }}
            className={styles.searchIcon}
            onClick={goToSearchPage}
        >
            <SearchIcon htmlColor='#c9a461' sx={{
                transform: 'rotate(-4deg)',
                fontSize: '1.3rem'
            }} />
        </IconButton>
        <div className={styles.inputContainer}>
            <input placeholder='Search' value={userInput} onChange={e => setUserInput(e.target.value)}/>
        </div>
    </form>
  )
}