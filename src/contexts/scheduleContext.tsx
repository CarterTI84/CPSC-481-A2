'use client'

import { ScheduleItem } from '@/types/Schedule';
import { PropsWithChildren, createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const localStorageKey = "visit-ab-schedule";

const getSchedule = (): ScheduleItem[] => {
    const itemsFromLocalStorage = localStorage.getItem(localStorageKey)
    if(!!itemsFromLocalStorage)
        return JSON.parse(itemsFromLocalStorage).schedule
    return []
}

const addSchedule = (schedule: ScheduleItem[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify({ schedule }))
}

type contextObject = {
    schedule: ScheduleItem[],
    addScheduleItem: (arg: Omit<ScheduleItem, "id">) => void
}
const ScheduleContext = createContext<contextObject | null>(null)

export function ScheduleContextProvider({ children }: PropsWithChildren) {
    const [schedule, setSchedule] = useState<ScheduleItem[]>([])

    const addScheduleItem = (arg: Omit<ScheduleItem, "id">) => {
        const { activity, startTime, endTime, additionalNotes } = arg
        setSchedule(schedule => {
            let newArr = [...schedule]
            newArr.push({
                id: uuidv4(), activity, 
                startTime, endTime, additionalNotes
            })
            addSchedule(newArr)
            return newArr
        })
    }

    useEffect(() => {
        setSchedule(getSchedule())
    }, [])

    return (
        <ScheduleContext.Provider
            value={{ schedule, addScheduleItem }}
        >
            {children}
        </ScheduleContext.Provider>
    )
}

export default ScheduleContext