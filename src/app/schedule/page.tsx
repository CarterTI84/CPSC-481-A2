'use client'

import { useState } from 'react'
import Activity from '@/components/Activity'
import styles from './page.module.css'
import PaddedContainer from '@/components/PaddedContainer'
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconButton } from '@mui/material'
import { FastRewind, FastForward } from '@mui/icons-material';

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
    const [value, setValue] = useState<Dayjs>(dayjs(new Date()));

    const goToNextDay = () => {
        setValue(date => {
            const givenDate = date.toDate();
            const nextDay = new Date(givenDate);
            nextDay.setDate(nextDay.getDate() + 1)
            return dayjs(nextDay)
        })
    }

    const goToPreviousDay = () => {
        setValue(date => {
            const givenDate = date.toDate();
            const previousDay = new Date(givenDate);
            previousDay.setDate(previousDay.getDate() - 1)
            return dayjs(previousDay)
        })
    }

    const handleDateChange = (newDate: dayjs.Dayjs | null) => {
        if(!!newDate)
            setValue(newDate)
    }

    return (
        <PaddedContainer>
            <center className={styles.container}>
                <h1>Your Schedule</h1>
                <div className={styles.topSection}>
                    <IconButton onClick={goToPreviousDay}>
                        <FastRewind />
                    </IconButton>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date"
                            value={value}
                            onChange={handleDateChange}
                        />
                    </LocalizationProvider>
                    <IconButton onClick={goToNextDay}>
                        <FastForward />
                    </IconButton>
                </div>
            </center>    
        </PaddedContainer>
    )
}