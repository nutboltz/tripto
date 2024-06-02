import { ParsedTikTokLinks } from "@/interfaces/itinerary";

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
        title: "List activities or restaurants you're interested in",
        inputType: "textArea",
        placeholder: "Snorkling at Playa del Carmen, Bagatelle"
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
            needsTicket: true,
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
            needsTicket: true,
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
            needsTicket: true,
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
            needsTicket: true,
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
            needsTicket: true,
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
            needsTicket: true,
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
            title: "Morning Glory",
            imageSrc: "https://media-cdn.tripadvisor.com/media/photo-o/1b/fc/52/07/img-20200813-131129-largejpg.jpg",
            category: "food",
            location: "Little Italy",
        },
        {
            title: "Born and Raised",
            imageSrc: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/9e/89/bf/photo4jpg.jpg",
            category: "food",
            location: "Little Italy",
        },
        {
            title: "Harney Sushi",
            imageSrc: "https://media-cdn.tripadvisor.com/media/photo-w/17/ba/e9/92/the-danielle-roll-has.jpg",
            category: "food",
            location: "Old Town",
        },
        {
            title: "Awash Ethiopian Restaurant",
            imageSrc: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/cf/f9/0a/photo0jpg.jpg",
            category: "food",
            location: "North Park"
        },
        {
            title: "Steamy Piggy",
            imageSrc: "https://media-cdn.tripadvisor.com/media/photo-w/15/ba/20/62/rainbow-dumplings.jpg",
            category: "food",
            location: "Kearny Mesa"
        }
    ],
    "https://www.tiktok.com/@localemag/video/7336711294696918314?q=san%20diego%20restaurants&t=1717339170447": [
        {
            title: "Captain's Quarters",
            imageSrc: "https://media-cdn.tripadvisor.com/media/photo-w/2a/b7/15/3c/super-cool-cocktails.jpg",
            category: "food",
            location: "San Diego"
        },
        {
            title: "The Marine Room",
            imageSrc: "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/11/82/60/lobster-tail.jpg",
            category: "food",
            location: "La Jolla"
        },
        {
            title: "The Britannia Tearooms",
            imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/Lw2LTNDi7llMFOvhnqkp8w/o.jpg",
            category: "coffee",
            location: "Point Loma"
        },
        {
            title: "Mothership",
            imageSrc: "https://media-cdn.tripadvisor.com/media/photo-w/29/df/31/08/caption.jpg",
            category: "food",
            location: "South Park"
        },
        {
            title: "The Seventh House",
            imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/sB9W3IJ-TnB6pht5kOa09A/o.jpg",
            category: "food",
            location: "San Diego"
        },
        {
            title: "Wolfie's Carousel",
            imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/SUw8ZVF5Gg29f875-M_kfg/o.jpg",
            category: "food",
            location: "Little Italy"
        }
    ],
    "https://www.tiktok.com/@localemag/video/7300788749338725674?q=things%20to%20do%20in%20san%20diego&t=1717339927285": [
        {
            title: "La Jolla Sea Caves",
            imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/05/f1/73/la-jolla-caves.jpg?w=1400&h=-1&s=1",
            category: "activity",
            location: "La Jolla"
        },
        {
            title: "Coffee with bunnies at Grange Garden",
            imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/LnjvPOmMrCUlUUNiv-q6wQ/o.jpg",
            category: "coffee",
            location: "Solana Beach",
        },
        {
            title: "Brunch at Stratford Court Cafe",
            imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/RjC46ojLIuPKjE4NgV-pgg/o.jpg",
            category: "food",
            location: "Del Mar",
        },
        {
            title: "Lightscape at the San Diego Botanic Garden",
            imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/B11PXwY5ljaZJdRG-GoKlg/348s.jpg",
            category: "activity",
            location: "Encinitas",
        },
        {
            title: "Dine in an Igloo at Lakehouse Resort",
            imageSrc: "https://symphony.cdn.tambourine.com/lakehouse-hotel-resort/media/tunnelheader-651d9bb89789b.webp",
            category: "food",
            location: "San Marcos",
        },
        {
            title: "Hike Annie Canyon Trail",
            imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/5f/81/02/annie-s-canyon-trail.jpg?w=1200&h=-1&s=1",
            category: "activity",
            location: "Borrego Springs",
        },
        {
            title: "The Invigatorium",
            imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/AukwJO92ND84pSw7oPt-rw/o.jpg",
            category: "coffee",
            location: "San Diego",
        },
        {
            title: "Free Flight Sanctuary",
            imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6e/e4/e0/free-flight.jpg?w=1400&h=-1&s=1",
            category: "activity",
            location: "Del Mar",
        },
        {
            title: "Ichi Ban Sando",
            imageSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/LO48s0vKqvG-h6RD01haWA/o.jpg",
            category: "food",
            location: "Chula Vista",
        },
        {
            title: "Paraglider at Torrey Pines Gliderport",
            imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/8f/2e/7a/torrey-pines-gliderport.jpg?w=600&h=-1&s=1",
            category: "food",
            location: "Torrey Pines",
        }
    ]
} as ParsedTikTokLinks;