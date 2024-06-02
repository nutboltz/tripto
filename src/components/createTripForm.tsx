'use client';

import { useState } from 'react';
import { tripData } from '../lib/data';
import { createTripType } from '../interfaces/trip';
import axios from 'axios';

interface CreateTripFormProps {
    onSubmit: (tripId: string) => void;
}

export default function CreateTripForm(props: CreateTripFormProps) {
    const  { onSubmit } = props;
    
    const data = tripData as createTripType[];

    // State to track input values for each item
    const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

    const handleInputChange = (id: string, value: string) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputValues);
        axios.post(process.env.NEXT_PUBLIC_BASE_URL+ '/api/createTrip',
        {
          destination: inputValues.location,
          startDate: inputValues["start date"],
          endDate: inputValues["end date"],
          participants: inputValues["participants email"].split(',').map(email => email.trim())
        }
        ).then(res => {
            onSubmit(res.data.tripId);
        })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {data.map((item, index) => (
                    <div key={index}>
                        <label htmlFor={item.title}>
                            {item.title}
                        </label>
                        <input
                            name={`input-${item.title}`}
                            id={`input-${item.title}`}
                            type="text"
                            value={inputValues[item.title] || ''}
                            placeholder={`Enter ${item.title}`}
                            onChange={(e) => handleInputChange(item.title, e.target.value)}
                            className="text-gray-900 text-sm border-silverBlue-2 border block px-2.5 py-2 focus:outline-none focus:ring-0 w-full"
                        />
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

