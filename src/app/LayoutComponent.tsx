'use client'

import { ActivitiesContextProvider } from "@/contexts/activitiesContext"
import { LoadingContextProvider } from "@/contexts/loadingContext"
import { ScheduleContextProvider } from "@/contexts/scheduleContext"
import { motion, AnimatePresence } from "framer-motion"
import { PropsWithChildren } from "react"

export default function LayoutComponent({ children }: PropsWithChildren) {
    return (
        <AnimatePresence>
            <motion.div className="beatifulScroll" style={{ height: "calc(100vh - 80px)" }}>
                <LoadingContextProvider>
                    <ActivitiesContextProvider>
                        <ScheduleContextProvider>
                            {children}
                        </ScheduleContextProvider>
                    </ActivitiesContextProvider>
                </LoadingContextProvider>
            </motion.div>
        </AnimatePresence>
    )
}