import { useContext } from "react"
import ScheduleContext from "@/contexts/scheduleContext"

export default function useScheduleContext() {
    const contextObject = useContext(ScheduleContext);

    if(!contextObject)
        throw new Error('useScheduleContext must be used inside a ScheduleContextProvider')

    return contextObject
}