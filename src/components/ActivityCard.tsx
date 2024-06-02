'use client';
import React from 'react';

interface ActivityCardProps {
    imageSrc: string;
    title: string;
    location: string;
    rating: number;
    category: string;
}

export default function ActivityCard(props: ActivityCardProps) {
    const { imageSrc, title, location, rating, category } = props;

    return <>
            <div className="max-w-xs h-48 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                <img className="w-full h-24 object-cover" src={imageSrc} alt={title} />
                <span className="absolute top-2 left-2 bg-white text-gray-800 text-xs font-semibold px-1 py-0.5 rounded">{category}</span>
                </div>
                <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 truncate">{title}</h3>
                <p className="text-gray-600 text-xs mt-1 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 12.414m0 0L9.172 8.172m4.242 4.242L3 21h18l-7.071-7.071z" />
                    </svg>
                    {location}
                </p>
                </div>
            </div>
        </>
}