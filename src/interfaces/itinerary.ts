export interface ItineraryStatus {
    ready: boolean;
    tripParticipants: string[];
    submittedParticipants: string[];
}

export interface Itinerary {
    [key: string]: ItineraryItem[]
}

export interface ItineraryItem {
    title: string;
    duration: number;
    needsTicket: boolean;
    needsReservation: boolean;
}

export interface Preference {
    minBudget: number;
    maxBudget: number;
    activities: string[];
    food: string[];
    isMorningPerson: boolean;
    dietaryPreference: string;
    travelPreference: string;
    vibe: string;
    others: string;
}

export interface ParsedActivity {
    imageSrc: string;
    title: string;
    location: string;
    category: string;
    rating?: number;
}

export interface ParsedTikTokLinks {
    [key: string]: { 
        title: string; 
        imageSrc: string; 
        category: string; 
        location: string; 
    }[];
}
