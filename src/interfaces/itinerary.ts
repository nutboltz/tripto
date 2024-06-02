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
}