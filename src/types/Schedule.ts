import { ActivityType } from "./Activity"

export type ScheduleItem = {
    id: string,
    activity: ActivityType
    startTime: string,
    endTime: string
    additionalNotes?: string
}