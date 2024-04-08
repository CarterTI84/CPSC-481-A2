import { useContext } from "react"
import ActivitiesContext from "@/contexts/activitiesContext"

export default function useActivitiesContext() {
    const contextObject = useContext(ActivitiesContext);

    if(!contextObject)
        throw new Error('useActivitiesContext must be used inside a ActivitiesContextProvider')

    return contextObject
}