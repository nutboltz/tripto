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

    useEffect(() => {
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
    }, [itineraryStatus]);

    const onRefresh = () => {
        axios.get(getBaseUrl()+ '/api/generateItinerary',
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
        <div className="py-10 px-24 flex flex-col gap-10 justify-center items-center">
            { itineraryStatus.ready &&
                <div>
                    <h1 className="font-semibold text-4xl">Trip to</h1>
                    <h1 className="font-semibold text-4xl text-gray-400">{trip.destination}</h1>
                </div>
            }
            <div className="z-10">
            { !itineraryStatus.ready ? 
                <div className='flex flex-col gap-4 justify-center items-center pt-28'>
                    <h1 className="text-4xl font-semibold max-w-lg text-center">Get ready for your trip to {trip.destination}</h1>
                    <p className="text-2xl text-[#8B8B8B] max-w-2xl text-center">We will email you the once everyone has completed their form and your itinerary is ready.</p>
                    <a 
                        href={preferencesLink}
                        className="flex mt-4 px-6 py-2.5 text-white bg-[#080E1E] rounded-full justify-center w-fit"
                    >
                        Set preferences
                    </a>
                
                </div> : itinerary ?
                <ItineraryTimeline itinerary={itinerary}/> : null
            }
            </div>
        </div>
      </div>
    </>
  );
}
