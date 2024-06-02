'use client'
import { ItineraryStatus } from '@/interfaces/itinerary';
import { getBaseUrl } from '@/lib/utils';
import { fetchItineraryStatus } from '@/server/itinerary';

export async function getServerSideProps({ params } : { params: { tripId: string }}) {
    const itineraryStatus = await fetchItineraryStatus(params.tripId);
    const preferencesLink = `${getBaseUrl()}/trip/${params.tripId}/preferences`
    return { props: { 
        itineraryStatus,
        preferencesLink,
     } };
}


interface TripProps {
    itineraryStatus: ItineraryStatus;
    preferencesLink: string;
}


export default function Trip(props: TripProps) {

    const { itineraryStatus, preferencesLink } = props;

    if (itineraryStatus.ready) {
        // get itinerary
    }


    // Get Itinerary


  return (
    <>
    { !itineraryStatus.ready ? 
    <div>
        <h1>Waiting on all participants to submit their preferences</h1>
        <p>Participants: {itineraryStatus.tripParticipants.join(', ')}</p>
        <p>Submitted Participants: {itineraryStatus.submittedParticipants.join(', ')}</p>
        <p>Link to submit preferences: </p>
        <a href={preferencesLink}>{preferencesLink}</a>
    </div> : 
        <h1>Here is your itinerary :  </h1>
    }
    </>
  );
}
