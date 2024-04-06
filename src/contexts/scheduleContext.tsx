'use client'

import { ScheduleItem } from '@/types/Schedule';
import { PropsWithChildren, createContext, useEffect, useState } from 'react'

const localStorageKey = "visit-ab-schedule";

const getSchedule = (): ScheduleItem[] => {
    const itemsFromLocalStorage = localStorage.getItem(localStorageKey)
    if(!!itemsFromLocalStorage)
        return JSON.parse(itemsFromLocalStorage).schedule
    return []
}

type contextObject = {
    schedule: ScheduleItem[]
}
const ScheduleContext = createContext<contextObject | null>(null)

export function ScheduleContextProvider({ children }: PropsWithChildren) {
    const [schedule, setSchedule] = useState<ScheduleItem[]>([])

    useEffect(() => {
        setSchedule(getSchedule())
    }, [])

    return (
        <ScheduleContext.Provider
            value={{ schedule }}
        >
            {children}
        </ScheduleContext.Provider>
    )
}

export default ScheduleContext