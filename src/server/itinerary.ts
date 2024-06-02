import { ItineraryStatus } from "../interfaces/itinerary";
import { openAiResponse } from "./lib/gpt/openai";
import { getPrismaClient } from "./lib/prisma";


export const fetchItineraryStatus = async (tripId: string): Promise<ItineraryStatus> => {

    const prisma = getPrismaClient();
    const trip = await prisma.trip.findUnique(
        {
            where: {
                id: tripId
            },
            select: {
                participants: {
                    select: {
                        email: true
                    }
                },
                tripPreferences: {
                    select: {
                        userEmail: true
                    }
                },
                itinerary: true
            }
        }
    )

    if (!trip) {
        throw new Error(`Trip with id ${tripId} not found`)
    }

    const allParticipants = trip.participants.map(participant => participant.email);
    const submittedParticipants = trip.tripPreferences.map(preference => preference.userEmail);
    const ready = allParticipants.length === submittedParticipants.length;

    return {
        ready,
        tripParticipants: allParticipants,
        submittedParticipants
    }
}
    
export const generateItinerary = async (tripId: string) => {
    const prisma = getPrismaClient();
    const trip = await prisma.trip.findUnique({
        where: {
            id: tripId
        },
        include: {
            tripPreferences: true
        }
    })

    if (!trip) {
        throw new Error(`Trip with id ${tripId} not found`)
    }

    const preferences = trip.tripPreferences.map(preference => preference.preferences)

    // Add itinary generation logic here
    // const generateItineraryPrompt = GENERATE_ITINERARY_PROMPT(preferences)

    // const response = await openAiResponse(generateItineraryPrompt)

    const mockItinerary = "Day 1: Visit the Eiffel Tower. Day 2: Visit the Louvre. Day 3: Visit the Arc de Triomphe."

    await prisma.trip.update({
        where: {
            id: tripId
        },
        data: {
            itinerary: mockItinerary
        }
    })
}

export const sendItineraryEmail = async (tripId: string) => {
    const prisma = getPrismaClient();
    const trip = await prisma.trip.findUnique({
        where: {
            id: tripId
        },
        select: {
            participants: true,
            itinerary: true
        }
    })

    if (!trip) {
        throw new Error(`Trip with id ${tripId} not found`)
    }

    const participants = trip.participants.map(participant => participant.email)

    // Add email sending logic here
    // participants.forEach(email => sendEmail(email, trip.itinerary))
}