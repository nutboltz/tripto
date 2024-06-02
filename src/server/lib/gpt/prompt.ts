const GENERATE_ITINERARY_PROMPT = (userPreferences: any) => {
    return `You are an expert in trip planning. 
    
    Task: Create a detailed travel itinerary based on the preferences of a group of travelers. Each participants preferences are listed below in a JSON format.
    ${userPreferences}

    Objective: Based on the provided preferences, create a day-by-day travel itinerary that includes activities for the group. Ensure that the itinerary balances the preferences of all participants and includes a mix of activities to cater to everyones interests. Include specific times, locations, and any relevant details for each activity.

    You have been tasked with planning a trip for a group of friends.
    Based on the the following user preferences: ${JSON.stringify(userPreferences)}, generate a scheduled itinerary for the trip.
`

}
    