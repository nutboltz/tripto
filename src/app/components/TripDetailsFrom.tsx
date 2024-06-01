'use client';

import { useState } from 'react';
import { tripDetails } from '../lib/data'; // Importing the actual data
import { tripDetailsType } from '../lib/types';

export default function TripDetailsForm() {

    const data = tripDetails as tripDetailsType[];

    const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

    const handleInputChange = (id: string, value: string) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        //API endpoint call 

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
                        {item.radio ? (
                            <input
                                name={`input-${item.title}`}
                                id={`input-${item.title}`}
                                type="text"
                                value={inputValues[item.title] || ''}
                                placeholder={`Enter ${item.title}`}
                                onChange={(e) => handleInputChange(item.title, e.target.value)}
                                className="text-gray-900 text-sm border-silverBlue-2 border block px-2.5 py-2 focus:outline-none focus:ring-0 w-full"
                            />
                        ):(
                            <textarea
                                name={`input-${item.title}`}
                                id={`input-${item.title}`}
                                rows={10}
                                value={inputValues[item.title] || ''}
                                placeholder={`Enter ${item.title}`}
                                onChange={(e) => handleInputChange(item.title, e.target.value)}
                                className="text-gray-900 text-sm border-silverBlue-2 border block px-2.5 py-2 focus:outline-none focus:ring-0 w-full"
                            />
                        )
                        }
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}