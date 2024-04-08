'use client'

import { LoadingContextProvider } from "@/contexts/loadingContext"
import { ScheduleContextProvider } from "@/contexts/scheduleContext"
import { motion, AnimatePresence } from "framer-motion"
import { PropsWithChildren } from "react"

export default function LayoutComponent({ children }: PropsWithChildren) {
    return (
        <AnimatePresence>
            <motion.div className="beatifulScroll" style={{ height: "calc(100vh - 80px)" }}>
                <LoadingContextProvider>
                    <ScheduleContextProvider>
                        {children}
                    </ScheduleContextProvider>
                </LoadingContextProvider>
            </motion.div>
        </AnimatePresence>
    )
}