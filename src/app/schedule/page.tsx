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
import useScheduleContext from '@/hooks/useScheduleContext'
import { ScheduledActivity } from '@/types/Activity'
import { beautifyDate } from '@/lib/helpers'

type CardContainerProps = {
    scheduledActivity: ScheduledActivity
}
const CardContainer = ({ scheduledActivity }: CardContainerProps) => {
    const { activity, startTime, endTime } = scheduledActivity;
    return (
        <div className={styles.cardContainer}>
            <div className={styles.activityContainer}>
                <Activity activity={activity} />
            </div>
            <div className={styles.timeSection}>
                <strong>Start Time:</strong>{` ${beautifyDate(new Date(startTime))}`}
            </div>
            <div className={styles.timeSection}>
                <strong>End Time:</strong>{` ${beautifyDate(new Date(endTime))}`}
            </div>
        </div>
    )
}

type Props = {
    searchParams: {
        date?: string 
    }
}
export default function Schedule({ searchParams }: Props) {
    const initialDate = searchParams.date ? decodeURIComponent(searchParams.date) : new Date()
    const [value, setValue] = useState<Dayjs>(dayjs(initialDate));

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

    const { getActivitiesOnDay } = useScheduleContext();

    const activities = getActivitiesOnDay(value.toDate())
    
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
                <div className={styles.activitiesContainer}>
                    {activities.map(activity => <CardContainer key={activity.id} scheduledActivity={activity} />)}
                </div>
            </center>    
        </PaddedContainer>
    )
}