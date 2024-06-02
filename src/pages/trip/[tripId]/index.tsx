'use client'
import { Itinerary, ItineraryStatus } from '@/interfaces/itinerary';
import { getBaseUrl } from '@/lib/utils';
import { getItineraryStatus, fetchTrip } from '@/server/itinerary';
import { Inter } from 'next/font/google';
import { TripPreferences, User, Trip } from '@prisma/client';
import { useState } from 'react';
import axios from 'axios';
import ItineraryTimeline from '@/components/itineraryTimeline';

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps({ params } : { params: { tripId: string }}) {
    const trip = await fetchTrip(params.tripId);
    const itineraryStatus = await getItineraryStatus(trip);
    const preferencesLink = `${getBaseUrl()}/trip/${params.tripId}/preferences`
    return { props: { 
        trip,
        itineraryStatus,
        preferencesLink,
     } };
}


interface TripProps {
    trip: Trip & { participants: User[], tripPreferences: TripPreferences[] };
    itineraryStatus: ItineraryStatus;
    preferencesLink: string;
}


export default function TripPage(props: TripProps) {

    const { trip, itineraryStatus, preferencesLink } = props;

    const [itinerary, setItinerary] = useState<Itinerary>();

    if (itineraryStatus.ready) {
        axios.get(getBaseUrl()+ '/api/getTripItinerary',
        {
            params: {
                tripId: trip.id,
            }
        }
        ).then(res => {
            setItinerary(res.data.itinerary);
        })
    }

  return (
    <>
        <div className={`py-20 px-32 flex flex-col gap-10 relative ${inter.className}`}>
        <div className="bg-[#D5AEE4] opacity-15 absolute -top-[10rem] -right-[10rem] h-[40rem] w-[40rem] rounded-full blur-[7rem] z-0"></div>
        <div className="bg-[#AEC7E4] opacity-15 absolute top-[20rem] -left-[10rem] h-[75rem] w-[75rem] rounded-full blur-[7rem] z-0"></div>
        <div>
            <h1 className="font-semibold text-4xl">Trip to</h1>
            <h1 className="font-semibold text-4xl text-gray-400">{trip.destination}</h1>
        </div>
        <div className="z-10">
        { !itineraryStatus.ready ? 
            <div>
                <h1>Waiting on all participants to submit their preferences</h1>
                <p>Participants: {itineraryStatus.tripParticipants.join(', ')}</p>
                <p>Submitted Participants: {itineraryStatus.submittedParticipants.join(', ')}</p>
                <p>Link to submit preferences: </p>
                <a href={preferencesLink}>{preferencesLink}</a>
            </div> : itinerary ?
            <ItineraryTimeline itinerary={itinerary}/> : null
        }
        </div>
      </div>
    </>
  );
}
