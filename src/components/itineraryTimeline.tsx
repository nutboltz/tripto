'use client';

import { Itinerary } from '@/interfaces/itinerary';
import React from 'react';

interface ItineraryProps {
    itinerary: Itinerary
}

export default function ItineraryTimeline(props: ItineraryProps) {
    const  { itinerary } = props;

    return (
        <div className="flex flex-col items-center p-4">
            {Object.keys(itinerary).map((day, dayIndex) => { console.log(day); return (
                <div key={dayIndex} className="w-full max-w-2xl bg-white rounded-lg shadow-md mb-6">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-700">Day {dayIndex + 1}</h2>
                        <p className="text-sm text-gray-500">{day}</p>
                    </div>
                    <div className="p-4">
                        {itinerary[day].map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-start mb-4">
                                <div className="flex-shrink-0 mr-4">
                                    <span className="text-gray-500 text-sm">{activityIndex + 1}</span>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-md font-medium text-gray-900">{activity.title}</h3>
                                    <p className="text-sm text-gray-600">{activity.duration} hours</p>
                                </div>
                                <div className="flex-shrink-0 ml-auto flex items-center space-x-2">
                                    <button className="bg-green-100 text-green-600 px-2 py-1 rounded-full">✔</button>
                                    <button className="bg-red-100 text-red-600 px-2 py-1 rounded-full">✖</button>
                                    <button className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Maybe</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )})}
        </div>
    );
}