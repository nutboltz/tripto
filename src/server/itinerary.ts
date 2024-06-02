import { ItineraryStatus } from "../interfaces/itinerary";
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
    
