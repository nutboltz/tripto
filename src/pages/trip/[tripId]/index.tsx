'use client'
import { ItineraryStatus } from '@/interfaces/itinerary';
import { fetchItineraryStatus } from '@/server/itinerary';

export async function getServerSideProps({ params } : { params: { tripId: string }}) {
    const itineraryStatus = await fetchItineraryStatus(params.tripId);
    // const itinerary = await fetchItinerary(params.tripId);
    return { props: { 
        itineraryStatus,
        // itinerary
     } };
}


interface TripProps {
    itineraryStatus: ItineraryStatus;
    itinerary: any;
}


export default function Trip(props: TripProps) {

    const { itineraryStatus, itinerary } = props;


    // Get Itinerary


  return (
    <>
    { !itineraryStatus.ready ? 
    <div>
        <h1>Waiting on all participants to submit their preferences</h1>
        <p>Participants: {itineraryStatus.tripParticipants.join(', ')}</p>
        <p>Submitted Participants: {itineraryStatus.submittedParticipants.join(', ')}</p>
    </div> : 
        <h1>Here is your itinerary : {itinerary} </h1>
    }
    </>
  );
}
