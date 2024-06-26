'use client'

import { ActivityType } from "@/types/Activity";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { activities, activityCategories } from "~/mockData/Activities";

const localStorageKey = "visit-ab-saved-activities";

const getSavedActivities = (): ActivityType[] => {
    const itemsFromLocalStorage = localStorage.getItem(localStorageKey)
    if(!!itemsFromLocalStorage)
        return JSON.parse(itemsFromLocalStorage).activities
    return []
}

const updateSavedActivities = (activities: ActivityType[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify({ activities }))
}

type contextObject = {
    allActivities: ActivityType[],
    savedActivities: ActivityType[],
    addActivityToSaved: (activity: ActivityType) => void
    removeSavedActivity: (activity: string) => void,
    isSaved: (activity: string) => boolean,
    getResults: (filterWord: string) => ActivityType[]
}
const ActivitiesContext = createContext<contextObject | null>(null)

export function ActivitiesContextProvider({ children }: PropsWithChildren) {
    const allActivities = activities;

    const categoryNames = activityCategories.map(item => item.name);

    const getResults = (filterWord: string) => {
        let results: ActivityType[] = []
        let matcher = new RegExp(`.*${filterWord.trim()}.*`, 'i')
        const categoryName = categoryNames.find(categoryName => matcher.test(categoryName))
        if(!!categoryName) {
            let category = activityCategories.find(category => category.name === categoryName)
            if (category)
                results = category.activities.map(activityId => activities.find(activity => activity.id === activityId) as ActivityType)
        }
        else {
            results = activities.filter(activity => matcher.test(activity.name)) 
        }
        return results
    }

    const [savedActivities, setSavedActivities] = useState<ActivityType[]>([]);

    const addActivityToSaved = (savedActivity: ActivityType) => {
        setSavedActivities(activities => {
            let newArr = [...activities, savedActivity]
            updateSavedActivities(newArr)
            return newArr
        })
    }

    const removeSavedActivity = (activityId: string) => {
        setSavedActivities(activities => {
            let newArr = [...activities]
            let toRemove = activities.findIndex(activity => activity.id === activityId)
            if(toRemove >= 0) {
                newArr = [...activities.slice(0, toRemove), ...activities.slice(toRemove + 1)]
            }
            updateSavedActivities(newArr)
            return newArr
        })
    }

    const isSaved = (activityId: string) => !!savedActivities.find(activity => activity.id === activityId);

    useEffect(() => {
        setSavedActivities(getSavedActivities())
    }, [])

    return (
        <ActivitiesContext.Provider 
            value={{ 
                allActivities, 
                savedActivities, 
                isSaved, getResults,
                addActivityToSaved,
                removeSavedActivity 
            }}
        >
            {children}
        </ActivitiesContext.Provider>
    )
}

export default ActivitiesContext