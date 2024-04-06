import { PropsWithChildren } from "react"
import styles from "./index.module.css"

export default function PaddedContainer({ children }: PropsWithChildren) {
    return (
        <div className={`${styles.container} beatifulScroll`}>
            <div className={styles.innerContainer}>
                {children}  
            </div>
        </div>
    )
}