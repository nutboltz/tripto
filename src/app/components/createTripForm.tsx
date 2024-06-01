'use client';

import { useState } from 'react';
import { tripData } from '../lib/data'; // Importing the actual data
import { createTripType } from '../lib/types';

export default function CreateTripForm() {
    // Assuming tripData is an array of objects that follow createTripType structure
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
        // Handle form submission logic here, e.g., sending inputValues to your API
        console.log(inputValues);
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

