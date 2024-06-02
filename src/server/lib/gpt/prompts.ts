export const GENERATE_ITINERARY_PROMPT = (userPreferences: any, dayStartTime: number, startDate?: string, endDate?: string, destination?: string) => {
    return `You are an expert in trip planning. 
    
    Task: Create a detailed travel itinerary based on the todos of a group of travelers. Each participants preferences are listed below in a JSON format.
    ${userPreferences}

    Objective: Based on the provided preferences, create a day-by-day travel itinerary that includes activities for the group.
    
    Ensure that the itinerary balances the preferences of all participants and includes a mix of activities to cater to everyones interests.
    Include specific start time, end time, locations, and any relevant details for each activity. Take into account the travel time between locations and the time required for each activity. When in doubt, make assumptions about travel times and activity durations.

    When choosing the restaurants to eat at, take into account the dietary preferences of the group.

    ${destination ? `Trip Destination: ${destination}` : ""}
    ${startDate && endDate ? `Trip Dates: ${startDate} - ${endDate}` : ""}
    
    The trip will start at ${dayStartTime}am and end at 9pm.
`

}
    