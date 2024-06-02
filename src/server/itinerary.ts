import { Trip, TripPreferences, User } from "@prisma/client";
import { ItineraryStatus, Preference } from "../interfaces/itinerary";
import { openAiResponse } from "./lib/gpt/openai";
import { getPrismaClient } from "./lib/prisma";
import { itineraryPlaceholder } from "@/lib/data";
import { GENERATE_ITINERARY_PROMPT } from "@/server/lib/gpt/prompts";

export const fetchTrip = async (tripId: string) => {

    if (tripId === 'test') {
        const mockUser = {
            id: 'eunice',
            name: 'Eunice Tan',
            email: 'eunicehx920@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
        } as User

        const startDate = new Date()
        const endDate = startDate.setDate(new Date().getDate() + 3)
        const endDateDate = new Date(endDate)

        return {
            id: 'test',
            destination: 'Cancun, Mexico',
            participants: [mockUser],
            tripPreferences: [],
            deletedAt: null,
            createdAt: new Date(),
            updatedAt: new Date(),
            startDate: startDate,
            itinerary: null,
            endDate: endDateDate,
        } as Trip & { participants: User[], tripPreferences: TripPreferences[] }
    }

    // Trip that has completed preference
    if (tripId === 'test2') {
        const mockUser = {
            id: 'eunice',
            name: 'Eunice Tan',
            email: 'eunicehx920@gmail.com',
            deletedAt: null,
            createdAt: new Date(),
            updatedAt: new Date()
        } as User

        const mockTripPreference = {
            id: 'test',
            tripId: 'test2',
            userEmail: 'eunicehx920@gmail.com',
            preferences: { isMorningPerson: false },
            deletedAt: null,
            createdAt: new Date(),
            updatedAt: new Date()
        } as TripPreferences

        const startDate = new Date()
        const endDate = startDate.setDate(new Date().getDate() + 3)
        const endDateDate = new Date(endDate)

        return {
            id: 'test2',
            destination: 'Cancun, Mexico',
            participants: [mockUser],
            tripPreferences: [mockTripPreference],
            deletedAt: null,
            createdAt: new Date(),
            updatedAt: new Date(),
            itinerary: itineraryPlaceholder,
            startDate: startDate,
            endDate: endDateDate
        } as Trip & { participants: User[], tripPreferences: TripPreferences[] }
    }


    const prisma = getPrismaClient();
    const trip = await prisma.trip.findUnique({
        where: {
            id: tripId
        },
        include: {
            participants: true,
            tripPreferences: true
        }
    })

    if (!trip) {
        throw new Error(`Trip with id ${tripId} not found`)
    }

    return trip
}

export const getItineraryStatus = async (trip: Trip & { participants: User[], tripPreferences: TripPreferences[] }): Promise<ItineraryStatus> => {

    const prisma = getPrismaClient();

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
    // const preferencesForPrompt = trip.tripPreferences.map(tripPref => {
    //     if (!tripPref) {
    //         return null
    //     }

    //     if (!tripPref.preferences) {
    //         return null
    //     }

    //     const prefObj = JSON.parse(tripPref.preferences as string) as Preference
    //     return {
    //         user: tripPref.userEmail,
    //         activities: [],
    //         isMorningPerson: prefObj.isMorningPerson,
    //         dietaryPreferences: prefObj.dietaryPreference,
    //         preferredFood: prefObj.food,
    //     }

    // }).filter(preference => preference !== null)

    // const dontStartEarly = preferencesForPrompt.filter(preference => !preference.isMorningPerson)
    // let startTime = 8
    // if (dontStartEarly.length === preferencesForPrompt.length) {
    //     startTime = 10
    // }

    // const destination = trip.destination || undefined


    // const generateItineraryPrompt = GENERATE_ITINERARY_PROMPT(preferencesForPrompt, startTime, trip.startDate?.toDateString(), trip.endDate?.toDateString(), destination)

    // console.log(generateItineraryPrompt)

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