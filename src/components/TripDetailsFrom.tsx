'use client';

import { useState } from 'react';
import { tripDetails } from '../lib/data';
import { tripDetailsType } from '../interfaces/trip';
import axios from 'axios';
import { getBaseUrl } from '@/lib/utils';

interface TripDetailsFormProps {
    tripId: string;
    onSubmit: () => void;
}

export default function TripDetailsForm(props: TripDetailsFormProps) {
    const { tripId, onSubmit } = props;

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
        console.log(inputValues);

        axios.post(getBaseUrl()+ '/api/submitTripPreference',
        {
            tripId,
            userEmail: inputValues.email,
            preferences: inputValues["activities you'd like do"]
        }
        ).then(res => {
            onSubmit();
        })
        
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col gap-1">
                            <label htmlFor={item.title}>
                                {item.title}
                            </label>
                            {item.inputType === "text" &&
                                <input
                                    name={item.title}
                                    id={item.title}
                                    type="text"
                                    value={inputValues[item.title] || ''}
                                    placeholder={item.placeholder}
                                    onChange={(e) => handleInputChange(item.title, e.target.value)}
                                    className="text-gray-900 text-sm border-black border rounded px-2.5 py-2 focus:outline-none focus:ring-0 w-1/2"
                                />
                            }
                            {item.inputType === "textArea" &&
                                <textarea
                                    name={item.title}
                                    id={item.title}
                                    rows={5}
                                    value={inputValues[item.title] || ''}
                                    placeholder={item.placeholder}
                                    onChange={(e) => handleInputChange(item.title, e.target.value)}
                                    className="text-gray-900 text-sm border-black border rounded px-2.5 py-2 focus:outline-none focus:ring-0 w-1/2"
                                />
                            }
                            {item.inputType === "dropdown" &&
                                <select
                                    id={item.title}
                                    value={inputValues[item.title] || ''}
                                    onChange={(e) => handleInputChange(item.title, e.target.value)}
                                    className="text-gray-900 text-sm border border-black rounded px-2.5 py-2 focus:outline-none focus:ring-0 w-1/2"
                                >
                                    {item.options?.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            }
                        </div>
                    ))}
                    <button 
                        type="submit"
                        className="flex mt-4 px-6 py-2.5 w-40 text-white bg-[#080E1E] rounded-full justify-center"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}