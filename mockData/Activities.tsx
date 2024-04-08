import { ActivityCategory, ActivityType } from "@/types/Activity"

export const activities: ActivityType[] = [
    {
        id: "1",
        name: 'Lake Louise Viewing',
        rating: 4.8,
        price: 0.0,
        difficulty: 0.0,
        pictures: [
            '/assets/banff.jpg',
            '/assets/banff_gondola.jpg',
            '/assets/banff2.jpeg'
        ],
        address: `123 View Lake Louise`,
        description: `Experience the breathtaking beauty of Lake Louise, nestled in the heart of the Canadian Rockies. This activity offers visitors the chance to behold one of the world's most stunning alpine lakes, renowned for its turquoise-blue waters, surrounded by majestic snow-capped peaks and verdant forests. Whether you're enjoying a leisurely stroll along the shoreline, capturing memorable photographs, or simply immersing yourself in the serene ambiance, Lake Louise promises an unforgettable encounter with nature's splendor.`
    },
    {
        id: "2",
        name: 'The Banff Gondola',
        rating: 3.9,
        price: 5.0,
        difficulty: 0.0,
        pictures: [
            '/assets/banff_gondola.jpg'
        ],
        address: `123 Gondola Banff`,
        description: `The Banff Gondola is an exhilarating way to ascend to the summit of Sulphur Mountain, providing panoramic views of the UNESCO World Heritage-listed Banff National Park. Offering a seamless blend of adventure and awe-inspiring scenery, this experience invites tourists to soar above the treetops in comfortable gondola cabins. Upon reaching the summit, visitors are treated to breathtaking vistas of the Canadian Rockies, including stunning views of Banff townsite, Bow Valley, and surrounding peaks. Whether you're seeking adventure or simply craving spectacular views, the Banff Gondola promises an unforgettable journey into the heart of the Rocky Mountains.`
    },
    {
        id: "3",
        name: 'Banff Mountains',
        rating: 4.1,
        price: 0.0,
        difficulty: 0.0,
        pictures: [
            '/assets/banff2.jpeg'
        ],
        address: `123 Gondola Banff`,
        description: `Explore the majestic Banff Mountains, an iconic part of the Canadian Rockies that captivates visitors with its rugged beauty and breathtaking vistas. Towering peaks, pristine alpine lakes, and lush forests await adventurers seeking unforgettable outdoor experiences. Whether you're embarking on a scenic hike, exhilarating rock climbing expedition, or simply taking in the stunning views from a cozy lodge, the Banff Mountains offer endless opportunities for exploration and connection with nature. Discover the magic of these awe-inspiring mountains, where every turn reveals a new wonder waiting to be explored.`
    },
    {
        id: "4",
        name: 'Banff Skiing',
        rating: 4.5,
        price: 4.0,
        difficulty: 3.0,
        pictures: [
            '/assets/banff.jpg'
        ],
        address: `123 Ski Hill Banff`,
        description: `Experience the thrill of world-class skiing in Banff, nestled amidst the stunning peaks of the Canadian Rockies. Renowned for its powder-filled slopes and breathtaking scenery, Banff offers an unforgettable winter sports adventure for skiers of all levels. From gentle slopes perfect for beginners to challenging terrain for seasoned experts, there's something for everyone on Banff's slopes. After a day of carving through pristine snow, relax and unwind in cozy mountain lodges or indulge in après-ski activities in the charming town of Banff. Whether you're a seasoned skier or new to the sport, Banff promises an exhilarating and memorable winter getaway.`
    },
    {
        id: "5",
        name: 'Lake Louise Hike',
        rating: 4.5,
        price: 0.0,
        difficulty: 3.0,
        pictures: [
            '/assets/banff.jpg'
        ],
        address: `123 Lake Louise Hike`,
        description: `Experience this beautiful hike in lake louise!`
    },
    {
        id: "6",
        name: 'Glenbow Museum',
        rating: 5.0,
        price: 5.0,
        difficulty: 0.0,
        pictures: [
            '/assets/Glenbow.jpg'
        ],
        address: `123 Glenbow Museum Calgary`,
        description: `Experience this historic Calgary musuem`
    },
    {
        id: "7",
        name: 'Grizzly House',
        rating: 4.0,
        price: 1.0,
        difficulty: 0.0,
        pictures: [
            '/assets/Glenbow.jpg'
        ],
        address: `123 Grizzly House Banff`,
        description: `Experience this famouse Banff fondue restaurant`
    },
    {
        id: "8",
        name: 'Calgary Distillery Tour',
        rating: 4.0,
        price: 4.0,
        difficulty: 0.0,
        pictures: [
            '/assets/cdt.jpg'
        ],
        address: `123 Distillery Calgary`,
        description: `Learn about the history of distilling alcohol in Alberta!`
    },
    {
        id: "9",
        name: 'Taste of Calgary',
        rating: 5.0,
        price: 4.0,
        difficulty: 0.0,
        pictures: [
            '/assets/taste.jpg'
        ],
        address: `123 Downtown Calgary`,
        description: `A foodtruck festival in Calgary, fun for anyone!`
    },
    {
        id: "10",
        name: 'West Edmonton Mall',
        rating: 5.0,
        price: 4.0,
        difficulty: 0.0,
        pictures: [
            '/assets/westedmall.jpg'
        ],
        address: `123 West Edmonton Mall`,
        description: `Edmonton's famous shopping mall! Complete with a water park too!`
    },
    {
        id: "11",
        name: 'Calgary Farmers\' Market',
        rating: 5.0,
        price: 4.0,
        difficulty: 0.0,
        pictures: [
            '/assets/cdt.jpg'
        ],
        address: `123 Farmer Market Calgary`,
        description: `A great stop in Calgary for shopping and eats!`
    },
    {
        id: "12",
        name: 'Old Strathcona Antique Mall',
        rating: 5.0,
        price: 3.0,
        difficulty: 0.0,
        pictures: [
            '/assets/strathant.jpg'
        ],
        address: `123 Antique Mall Edmonton`,
        description: `A place to buy anituqe goods in Edmonton!`
    },
]

export const activityCategories: ActivityCategory[] = [
    {
        id: "10",
        name: 'Food',
        picture: '/assets/food_category.webp',
        activities: [
            "7",
            "8",
            "9"
        ]
    },
    {
        id: "20",
        name: 'Outdoors',
        picture: '/assets/banff.jpg',
        activities: [
            "2",
            "4",
            "5"
        ]
    },
    {
        id: "30",
        name: 'Sight Seeing',
        picture: '/assets/sight_seeing.jpg',
        activities: [
            "1",
            "3",
            "6"
        ]
    },
    {
        id: "40",
        name: 'Shopping',
        picture: '/assets/westedmall.jpg',
        activities: [
            "10",
            "11",
            "12"
        ]
    },
]