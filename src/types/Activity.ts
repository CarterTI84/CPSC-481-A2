export type ActivityType = {
    id: string,
    name: string,
    rating: number,
    price: number,
    difficulty: number,
    pictures: string[],
    address: string,
    description: string
}

export type ActivityCategoryName = "Food" | "Outdoors" | "Sight Seeing" | "Shopping";

export type ActivityCategory = {
    id: string,
    name: string,
    picture: string,
    activities: string[]
}