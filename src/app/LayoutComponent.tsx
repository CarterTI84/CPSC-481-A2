'use client'

import { motion, AnimatePresence } from "framer-motion"
import { PropsWithChildren } from "react"

export default function LayoutComponent({ children }: PropsWithChildren) {
    return (
        <AnimatePresence>
            <motion.div>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}