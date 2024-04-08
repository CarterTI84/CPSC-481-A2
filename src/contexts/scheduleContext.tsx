'use client'

import { ActivityType } from '@/types/Activity';
import { ScheduleItem } from '@/types/Schedule';
import { PropsWithChildren, createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { activities } from '~/mockData/Activities';

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
    addScheduleItem: (arg: Omit<ScheduleItem, "id">) => void,
    getActivitiesOnDay: (arg: Date) => ActivityType[]
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

    const getActivitiesOnDay = (targetDate: Date) => {
        let result: ActivityType[] = [];
        result = schedule.filter(item => {
            const isSameDay = (activityDateString: string) => {
                const activityDate = new Date(activityDateString);
                return (
                    activityDate.getFullYear() === targetDate.getFullYear() &&
                    activityDate.getMonth() === targetDate.getMonth() &&
                    activityDate.getDate() === targetDate.getDate()
                );
            }
            return isSameDay(item.startTime)
        }).map(item => item.activity)
        return result
    }

    useEffect(() => {
        setSchedule(getSchedule())
    }, [])

    return (
        <ScheduleContext.Provider
            value={{ schedule, addScheduleItem, getActivitiesOnDay }}
        >
            {children}
        </ScheduleContext.Provider>
    )
}

export default ScheduleContext