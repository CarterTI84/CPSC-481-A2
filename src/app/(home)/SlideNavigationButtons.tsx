'use client'

import useHomeContext from "@/hooks/useHomeContext"
import styles from "./layout.module.css"
import { Button } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SlideNavigationButtons() {
    const { isLastSlide, goToNextSlide, goToPreviousSlide } = useHomeContext();

    return (
        <>
            <div className={styles.slideNavigationButtonsContainer}>
                <Button 
                    variant="contained" 
                    sx={{ 
                        bgcolor: "brown", 
                        "&:hover": { bgcolor: "maroon" } 
                    }}
                    onClick={goToPreviousSlide}
                >
                    Previous
                </Button>
                {isLastSlide ?
                    <Link href='/browse'>
                        <Button
                            variant="contained" 
                            sx={{ 
                                bgcolor: "brown", 
                                "&:hover": { bgcolor: "maroon" } 
                            }}
                            onClick={goToNextSlide}
                        >
                            Finish
                        </Button>
                    </Link>
                    :<Button
                        variant="contained" 
                        sx={{ 
                            bgcolor: "brown", 
                            "&:hover": { bgcolor: "maroon" } 
                        }}
                        onClick={goToNextSlide}
                    >
                        Next
                    </Button>
                }
            </div>
            <div className={styles.skipButtonContainer}>
                {!isLastSlide && 
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: 1,
                            transition: {
                                duration: 0.5
                            }
                        }}
                    >
                        <Link href='/browse'>
                            <Button 
                                variant="contained" 
                                sx={{ 
                                    bgcolor: "#a66832", 
                                    "&:hover": { bgcolor: "#422a14" } 
                                }}
                            >
                                Skip
                            </Button>
                        </Link>
                    </motion.div>
                }
            </div>
        </>
    )
}