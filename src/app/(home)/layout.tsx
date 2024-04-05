import type { PropsWithChildren } from "react";
import styles from "./layout.module.css"
import SlideNavigationButtons from "./SlideNavigationButtons";
import { HomeContextProvider } from "@/contexts/homeContext";

export default function HomeLayout({ children }: PropsWithChildren) {
    return (
        <center className={styles.container}>
            <h1 className={styles.heading}>Welcome to Visit Alberta!</h1>
            <HomeContextProvider>
                {children}
                <SlideNavigationButtons />
            </HomeContextProvider>
        </center>
    )
}