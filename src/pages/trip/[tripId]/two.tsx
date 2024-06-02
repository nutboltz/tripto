'use client'
import { Itinerary, ItineraryStatus } from '@/interfaces/itinerary';
import { getBaseUrl } from '@/lib/utils';
import { getItineraryStatus, fetchTrip } from '@/server/itinerary';
import { Inter } from 'next/font/google';
import { TripPreferences, User, Trip } from '@prisma/client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItineraryTimeline from '@/components/itineraryTimeline';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/router';
import { itineraryUpdated } from '@/lib/data';
import { it } from 'node:test';

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps({ params } : { params: { tripId: string }}) {
    const trip = await fetchTrip(params.tripId);
    // const itineraryStatus = await getItineraryStatus(trip);
    const newItinerary = itineraryUpdated
    const preferencesLink = `${getBaseUrl()}/trip/${params.tripId}/preferences`
    return { props: { 
        trip,
        itinerary: newItinerary,
        preferencesLink,
     } };
}


interface TripProps {
    trip: Trip & { participants: User[], tripPreferences: TripPreferences[] };
    itinerary: Itinerary
}


export default function TripTwoPage(props: TripProps) {

    const router = useRouter();
    const { trip, itinerary } = props;
    const [refreshing, setRefreshing] = useState(false);

  return (
    <>
        <div className={`py-10 px-10 flex flex-col gap-10 relative ${inter.className}`}>
        <div className="bg-[#D5AEE4] opacity-15 absolute top-[0rem] right-[0rem] h-[40rem] w-[40rem] rounded-full blur-[7rem] z-0"></div>
        <div className="bg-[#AEC7E4] opacity-15 absolute top-[20rem] -left-[10rem] h-[75rem] w-[75rem] rounded-full blur-[7rem] z-0"></div>
        <div className="flex gap-4 items-center">
            <Image
              src="/logo.png"
              alt="Description of my image"
              width={46}
              height={46}
            />
            <div className="font-semibold text-2xl z-10">trippin&apos;</div>
        </div>
        <div className="py-10 px-24 flex flex-col gap-10">
            { itinerary &&
                <div>
                    <h1 className="font-semibold text-4xl">Trip to</h1>
                    <h1 className="font-semibold text-4xl text-gray-400">{trip.destination}</h1>
                </div>
            }
            <div className="z-10">
            { refreshing ?
                <Loader2 className="animate-spin w-10 h-10"/> : itinerary ?
                <ItineraryTimeline tripId={trip.id} itinerary={itinerary}/> : null
            }
            </div>
        </div>
      </div>
    </>
  );
}
