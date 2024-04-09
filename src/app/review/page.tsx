'use client'

import PaddedContainer from "@/components/PaddedContainer"
import { activities } from "~/mockData/Activities"
import styles from "./page.module.css"
import { LoadingButton } from "@mui/lab"
import useLoadingContext from "@/hooks/useLoadingContext"
import { ActivityType } from "@/types/Activity"
import { useState } from "react"
import { Button } from "@mui/material"
import Link from "next/link"

const DropDown = ({ message }: { message: { positive: string, negative: string } }) => {
    return (
        <select name="number" className={styles.dropdown}>
            <option value="1">{`1 - ${message.negative}`}</option>
            <option value="2">{`2 - Slightly ${message.negative}`}</option>
            <option value="3">{`3 - Avergage`}</option>
            <option value="4">{`4 - Slightly ${message.positive}`}</option>
            <option value="5">{`5 - ${message.positive}`}</option>
        </select>
    )
}

const ReviewActivity = ({ activity }: { activity: ActivityType }) => {
    const { isLoading, startLoading, stopLoading } = useLoadingContext();

    const [success, setSuccess] = useState(false);

    const confirmReview = () => {
        startLoading()
        setTimeout(() => {
            setSuccess(true)
            stopLoading()
        }, 2500)
    }

    if(success)
        return (
            <PaddedContainer>
                <center 
                    style={{ 
                        height: "90vh", color: "white", display: "flex",
                        flexDirection: "column",
                        alignItems: "center", justifyContent: "center"
                    }}
                >
                    <h1>Thank you for your review!</h1>
                    <Link href='/browse' style={{ width: "100%" }}>
                        <Button
                            variant="contained"
                            sx={{ 
                                width: "100%",
                                bgcolor: "brown", 
                                "&:hover": { bgcolor: "maroon" } ,
                                marginTop: "50px"
                            }}
                        >
                            Return to browse activities
                        </Button>
                    </Link>
                </center>
            </PaddedContainer>
        )

    return (
        <PaddedContainer>
            <center className={styles.container}>
                <h1>Please review your experience</h1>
                <div className={styles.ratingContainer}>
                    <h3>How would you rate this activity?</h3>
                    <DropDown message={{ positive: "Good", negative: "Bad" }} />
                </div>
                <div className={styles.ratingContainer}>
                    <h3>How difficult did you find this activity?</h3>
                    <DropDown message={{ positive: "Difficult", negative: "Easy" }} />
                </div>
                <LoadingButton
                    loading={isLoading}
                    onClick={confirmReview}
                    variant="contained"
                    sx={{ 
                        width: "81%",
                        bgcolor: "#a66832", 
                        "&:hover": { bgcolor: "#422a14" } ,
                        marginTop: "50px"
                    }}
                >
                    Submit Review
                </LoadingButton>
            </center>
        </PaddedContainer>
    )
}

type Props = {
    searchParams: {
        activityId?: string
    }
}
export default function Review({ searchParams } : Props) {
    const activity = activities.find(activity => activity.id === (searchParams.activityId ?? ""))

    if(!activity)
        return <h1>Could not find activity</h1>

    return (
        <ReviewActivity activity={activity} />
    )
}