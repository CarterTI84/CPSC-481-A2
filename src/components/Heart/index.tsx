'use client'

import { Favorite } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useState } from 'react';

export default function Heart() {
    const [clicked, setClicked] = useState(false);
    const toggleState = () => {
        setClicked(clicked => !clicked)
    }

    return (
        <IconButton onClick={toggleState}>
            <Favorite htmlColor={clicked ? 'pink' : 'grey'} />
        </IconButton>
    )
}