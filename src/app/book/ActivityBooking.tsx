'use client'

import styles from "./page.module.css"
import PaddedContainer from "@/components/PaddedContainer";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from "react";
import { ActivityType } from "@/types/Activity";
import { Button } from "@mui/material";
import useScheduleContext from "@/hooks/useScheduleContext";
import useLoadingContext from "@/hooks/useLoadingContext";
import Link from "next/link";

type SuccessComponentProps = { 
    activity: ActivityType,
    startTime:  Dayjs,
    endTime: Dayjs
}
const SuccessComponent = ({ activity, startTime, endTime }: SuccessComponentProps) => {
    return (
        <PaddedContainer>
            <div className={styles.container}>
                <h1 style={{ color: "lightgreen" }}>Booking Successfull!</h1>
                <h2 style={{ width: "100%", textAlign: "left" }}>Your booking details:</h2>
                <div className={styles.bookingDetailContainer}>
                    <strong>Activity:</strong>{` ${activity.name}`}
                </div>
                <div className={styles.bookingDetailContainer}>
                    <strong>Start Time:</strong>{` ${startTime.toDate()}`}
                </div>
                <div className={styles.bookingDetailContainer}>
                    <strong>End Time:</strong>{` ${endTime.toDate()}`}
                </div>
                <Link href={`/schedule?date=${startTime.toISOString()}`} style={{ width: "100%" }}>
                    <Button
                        variant="contained"
                        sx={{ 
                            width: "100%",
                            bgcolor: "#a66832", 
                            "&:hover": { bgcolor: "#422a14" } 
                        }}
                    >
                        View your schedule
                    </Button>
                </Link>
            </div>
        </PaddedContainer>
    )
}

export default function ActivityBooking({ activity }: { activity: ActivityType }) {
    const { name } = activity;

    const [success, setSuccess] = useState(false);

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

    const { isLoading, startLoading, stopLoading } = useLoadingContext();

    const { addScheduleItem } = useScheduleContext();

    const confirmBooking = () => {
        try {
            if(startTime.toDate() >= stopTime.toDate())
                throw new Error(`The start time should be less than the end time`)

            if(startTime.toDate() <= (new Date()))
                throw new Error(`The start time should be greater than the current time`)
            
            startLoading()

            addScheduleItem({
                activity,
                startTime: startTime.toDate().toISOString(),
                endTime: stopTime.toDate().toISOString(),
                additionalNotes
            })
             // load for 3 seconds
            setTimeout(() => {
                setSuccess(true)
                stopLoading()
            }, 2000)
        } catch (error: any) {
            console.error("An error occured while trying to book: ", error)
            alert(error.message)
            stopLoading()
        }  
    }

    if(success)
        return (
            <SuccessComponent
                activity={activity}
                startTime={startTime}
                endTime={stopTime}
            />
        )

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
                    <h3>Additional Notes:</h3>
                    <textarea
                        value={additionalNotes}
                        onChange={e => setAdditionalNotes(e.target.value)}
                    >
                    </textarea>
                </div>
                <LoadingButton
                    loading={isLoading}
                    onClick={confirmBooking}
                    variant="contained"
                    sx={{ 
                        width: "81%",
                        bgcolor: "#a66832", 
                        "&:hover": { bgcolor: "#422a14" } 
                    }}
                >
                    Confirm Booking
                </LoadingButton>
            </div>
        </PaddedContainer>
    )
}