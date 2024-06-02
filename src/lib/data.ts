export const tripData = [
    // {
    //     title: "Enter a destination",
    //     inputType: "text",
    //     placeholder: "Cancun, Mexico"
    // },
    // {
    //     title: "Arrival",
    //     inputType: "date",
    //     placeholder: "08/11/2024"
    // },
    {
        title: "Departure",
        inputType: "date",
        placeholder: "08/20/2024"
    },
    {
        title: "Invite friends",
        inputType: "invite",
        placeholder: "johndoe@gmail.com"
    },
]

export const tripDetails = [
    {
        title: "Your email",
        inputType: "text",
        placeholder: "johndoe@gmail.com"
    },
    {
        title: "Budget",
        inputType: "text",
        placeholder: "$1000"
    },
    {
        title: "List activities you're interested in",
        inputType: "textArea",
        placeholder: "Snorkling at Playa del Carmen"
    },
    {
        title: "List restaurants you're excited to try",
        inputType: "textArea",
        placeholder: "Bagatelle"
    },
    {
        title: "Are you a morning or night person?",
        inputType: "dropdown",
        placeholder: "Night",
        options:["Night", "Day"]
    },
    {
        title: "How would you like to travel?",
        inputType: "dropdown",
        placeholder: "Rental car",
        options:["Rental car", "Public transportation", "Taxi"]
    },
    {
        title: "Do you have any dietary preferences?",
        inputType: "text",
        placeholder: "Vegan",
    },
    {
        title: "What is your vibe for the trip?",
        inputType: "text",
        placeholder: "Partying"
    },
    {
        title: "Anything else you would like to do?",
        inputType: "textArea",
        placeholder: "Hiking"
    },
]

export const itineraryPlaceholder = {
    "Little Italy & Old Town" : [
        {
            title: "Breakfast at Morning Glory (Little Italy)",
            duration: "1.5",
            type: "food",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Travel to Old Town",
            type: "travel",
            duration: "0.5",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Explore Old Town San Diego State Historic Park (Old Town)",
            duration: 2,
            type: "activity",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: " Lunch at Harney Sushi (Old Town)",
            duration: 1.5,
            type: "food",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Travel back to Little Italy",
            duration: 0.5,
            type: "travel",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Explore Little Italy or relax in a nearby cafe",
            duration: 1,
            type: "activity",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Check-in to Airbnb in Little Italy and settle in",
            duration: 0.5,
            type: "activity",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Visit Born and Raised for desserts and drinks (Little Italy)",
            duration: 1.5,
            type: "food",
            needsTicket: false,
            needsReservation: true,
        },
        {
            title: "Explore Little Italy’s art galleries and shops",
            duration: 1.5,
            type: "activity",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Dinner at Wolfie’s Carousel (Little Italy)",
            duration: 1,
            type: "food",
            needsTicket: false,
            needsReservation: true,
        },
        {
            title: "Walk around Little Italy, enjoying the evening ambiance",
            duration: 1,
            type: "activity",
            needsTicket: false,
            needsReservation: false,
        },
    ],
    "La Jolla & Del Mar" : [
        {
            title: "Travel to The Marine Room (La Jolla)",
            duration: 0.5,
            type: "travel",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Breakfast at The Marine Room (La Jolla)",
            duration: 1,
            type: "food",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Travel to La Jolla Sea Caves",
            duration: 0.5,
            type: "travel",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "La Jolla Sea Caves kayaking tour (La Jolla)",
            duration: 2,
            type: "activity",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Travel to Del Mar",
            duration: 0.5,
            type: "travel",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Brunch at Stratford Court Cafe (Del Mar)",
            duration: 1.5,
            type: "food",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Visit Free Flight Sanctuary (Del Mar)",
            duration: 1,
            type: "activity",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Travel to Encinitas",
            duration: 0.5,
            type: "travel",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Lightscape at the San Diego Botanic Garden (Encinitas)",
            duration: 2,
            type: "activity",
            needsTicket: false,
            needsReservation: true,
        },
        {
            title: "Travel back to Little Italy",
            duration: 0.75,
            type: "travel",
            needsTicket: false,
            needsReservation: false,
        }

    ],
    "San Diego & Gaslamp Quarter" : [
        {
            title: "Travel to Balboa Park",
            duration: 0.5,
            type: "travel",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Explore Balboa Park (San Diego)",
            duration: 1.5,
            type: "activity",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Return to Airbnb for checkout",
            duration: 0.5,
            type: "travel",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Check-out of Airbnb",
            duration: 0.5,
            type: "activity",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Lunch at Santa Gula (Gaslamp Quarter)",
            duration: 1.5,
            type: "food",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Travel to South Park",
            duration: 0.5,
            type: "travel",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Drinks and chill at Mothership (South Park)",
            duration: 1.5,
            type: "food",
            needsTicket: false,
            needsReservation: true,
        },
        {
            title: "Travel to North Park",
            duration: 0.5,
            type: "travel",
            needsTicket: false,
            needsReservation: false,
        },
        {
            title: "Early dinner at Awash Ethiopian Restaurant (North Park)",
            duration: 1.5,
            type: "food",
            needsTicket: false,
            needsReservation: true,
        },
        {
            title: "Explore the North Park neighborhood",
            duration: 1,
            type: "activity",
            needsTicket: false,
            needsReservation: false,
        },
    ],
}

export const parsedTikTokLinks = {
    "https://www.tiktok.com/@esthercalifornia/video/7335257921292438826?q=san%20diego%20restaurants&t=1717339170447": [
        {
            locationName: "Morning Glory",
            type: "food",
            roughArea: "Little Italy",
        },
        {
            locationName: "Born and Raised",
            type: "food",
            roughArea: "Little Italy",
        },
        {
            locationName: "Harney Sushi",
            type: "food",
            roughArea: "Old Town",
        },
        {
            locationName: "Awash Ethiopian Restaurant",
            type: "food",
            roughArea: "North Park"
        },
        {
            locationName: "Steamy Piggy",
            type: "food",
            roughArea: "Kearny Mesa"
        }
    ],
    "https://www.tiktok.com/@localemag/video/7336711294696918314?q=san%20diego%20restaurants&t=1717339170447": [
        {
            locationName: "Captain's Quarters",
            type: "food",
            roughArea: "San Diego"
        },
        {
            locationName: "The Marine Room",
            type: "food",
            roughArea: "La Jolla"
        },
        {
            locationName: "The Britannia Tearooms",
            type: "coffee",
            roughArea: "Point Loma"
        },
        {
            locationName: "Mothership",
            type: "food",
            roughArea: "South Park"
        },
        {
            locationName: "Santa Gula",
            type: "food",
            roughArea: "Gaslamp Quarter"
        },
        {
            locationName: "The Seventh House",
            type: "food",
            roughArea: "San Diego"
        },
        {
            locationName: "Wolfie's Carousel",
            type: "food",
            roughArea: "Little Italy"
        }
    ],
    "https://www.tiktok.com/@localemag/video/7300788749338725674?q=things%20to%20do%20in%20san%20diego&t=1717339927285": [
        {
            locationName: "La Jolla Sea Caves",
            type: "activity",
            roughArea: "La Jolla"
        },
        {
            locationName: "Coffee with bunnies at Grange Garden",
            type: "coffee",
            roughArea: "Solana Beach",
        },
        {
            locationName: "Brunch at Stratford Court Cafe",
            type: "food",
            roughArea: "Del Mar",
        },
        {
            locationName: "Lightscape at the San Diego Botanic Garden",
            type: "activity",
            roughArea: "Encinitas",
        },
        {
            locationName: "Dine in an Igloo at Lakehouse Resort",
            type: "food",
            roughArea: "San Marcos",
        },
        {
            locationName: "Hike Annie Canyon Trail",
            type: "activity",
            roughArea: "Borrego Springs",
        },
        {
            locationName: "The Invigatorium",
            type: "coffee",
            roughArea: "San Diego",
        },
        {
            locationName: "Free Flight Sanctuary",
            type: "activity",
            roughArea: "Del Mar",
        },
        {
            locationName: "Ichi Ban Sando",
            type: "food",
            roughArea: "Chula Vista",
        },
        {
            locationName: "Paraglider at Torrey Pines Gliderport",
            type: "food",
            roughArea: "Torrey Pines",
        }
    ]
}