'use client'

import styles from "./page.module.css"
import PaddedContainer from "@/components/PaddedContainer";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from "react";
import { ActivityType } from "@/types/Activity";
import { Button } from "@mui/material";
import useScheduleContext from "@/hooks/useScheduleContext";


export default function ActivityBooking({ activity }: { activity: ActivityType }) {
    const { name } = activity;

    const [startTime, setStartTime] = useState<Dayjs>(dayjs(new Date()));
    const handleStartTimeChange = (value: dayjs.Dayjs | null) => {
        if(!!value) {
            setStartTime(value)
        }
    }

    const [stopTime, setStopTime] = useState<Dayjs>(dayjs(new Date()));
    const handleStopTimeChange = (value: dayjs.Dayjs | null) => {
        if(!!value) {
            setStopTime(value)
        }
    }

    const [additionalNotes, setAdditionalNotes] = useState("");

    const { addScheduleItem } = useScheduleContext();

    const confirmBooking = () => {
        addScheduleItem({
            activity: activity.id,
            startTime: startTime.toISOString(),
            endTime: stopTime.toISOString(),
            additionalNotes
        })
    }

    return (
        <PaddedContainer>
            <div className={styles.container}>
                <h1>{`Book: ${name}`}</h1>
                <div className={styles.dateSection}>
                    <h3>Start Time:</h3>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            sx={{ bgcolor: "white" }}
                            value={startTime}
                            onChange={handleStartTimeChange}
                        />
                    </LocalizationProvider>
                </div>
                <div className={styles.dateSection}>
                    <h3>End Time:</h3>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            sx={{ bgcolor: "white" }}
                            value={stopTime}
                            onChange={handleStopTimeChange}
                        />
                    </LocalizationProvider>
                </div>
                <div className={styles.additionalNotesContainer}>
                    <textarea
                        value={additionalNotes}
                        onChange={e => setAdditionalNotes(e.target.value)}
                    >
                    </textarea>
                </div>
                <Button
                    onClick={confirmBooking}
                    variant="contained"
                    sx={{ 
                        width: "81%",
                        bgcolor: "#a66832", 
                        "&:hover": { bgcolor: "#422a14" } 
                    }}
                >
                    Confirm Booking
                </Button>
            </div>
        </PaddedContainer>
    )
}