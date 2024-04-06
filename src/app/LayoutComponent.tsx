'use client'

import { motion, AnimatePresence } from "framer-motion"
import { PropsWithChildren } from "react"

export default function LayoutComponent({ children }: PropsWithChildren) {
    return (
        <AnimatePresence>
            <motion.div className="beatifulScroll" style={{ height: "calc(100vh - 80px)" }}>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}