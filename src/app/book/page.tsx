import { activities } from "~/mockData/Activities";
import ActivityBooking from "./ActivityBooking";

type Props = {
    searchParams: {
        activityId: string
    }
}
export default function BookActivity({ searchParams }: Props) {
    const { activityId } = searchParams;

    const activity = activities.find(activity => activity.id === activityId)

    if(!activity)
        return <h1>Could not find activity</h1>
    
    return <ActivityBooking activity={activity} />
}