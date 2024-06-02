'use client';

import { Itinerary } from '@/interfaces/itinerary';
import React from 'react';

interface ItineraryProps {
    itinerary: Itinerary
}

export default function ItineraryTimeline(props: ItineraryProps) {
    const  { itinerary } = props;

    return (
        <div className="flex flex-col items-center">
            {Object.keys(itinerary).map((day, dayIndex) => { console.log(day); return (
                <div key={dayIndex} className="w-full">
                    <div className="py-4 flex gap-6 items-center">
                        <h2 className="text-sm font-semibold text-[#979797]">Day {dayIndex + 1}</h2>
                        <p className="text-sm text-gray-500">{day}</p>
                    </div>
                    <div className="py-4 pl-16 pr-4">
                        {itinerary[day].map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-start mb-4">
                                <div className="flex-shrink-0 mr-4">
                                    <span className="text-[#979797] text-xs border-2 border-[#979797] px-1.5 py-0.5 rounded-full">{activityIndex + 1}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-3xl font-semibold text-[#080E1E]">{activity.title}</h3>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-[#0267FF]">{activity.duration} hours</p>
                                        <div className="w-2 h-2 bg-[#FF4646] rounded-full"></div>
                                        <p className="text-[#FF4646]">{activity.duration} Needs Reservation</p>
                                    </div>
                                    <button className="bg-[#0267FF] text-white py-2 rounded w-32">Book</button>
                                </div>
                                <div className="flex-shrink-0 ml-auto flex items-center space-x-2">
                                    {/* <button className="bg-green-100 text-green-600 px-2 py-1 rounded-full">✔</button> */}
                                    <button className="text-[#979797] px-2 py-1 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                                        </svg>
                                    </button>
                                    {/* <button className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Maybe</button> */}
                                </div>
                            </div>
                        ))}
                        <div>
                            <button className="my-4 w-full font-semibold border text-[#0267FF] border-dashed border-[#0267FF] py-3">+ Add a place</button>
                        </div>
                    </div>
                </div>
            )})}
        </div>
    );
}