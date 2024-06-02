'use client';

import { useState } from 'react';
import { tripData } from '../lib/data';
import { createTripType } from '../interfaces/trip';
import axios from 'axios';
import { getBaseUrl, getBaseUrlServer } from '@/lib/utils';

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

    // const handleInvite = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     console.log('Invite button clicked');
    // };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputValues);
        axios.post(getBaseUrl()+ '/api/createTrip',
        {
          destination: inputValues["Enter a destination"],
          startDate: inputValues["Arrival"],
          endDate: inputValues["Departure"],
          participants: inputValues["Invite friends"].split(',').map(email => email.trim())
        }
        ).then(res => {
            try {
                axios.post(getBaseUrl()+ '/api/sendInviteEmail',
                {
                    recipients: inputValues["Invite friends"].split(',').map(email => email.trim()),
                    preferencesUrl: getBaseUrlServer() + `/trip/${res.data.tripId}/preferences`
                })
            } catch (error) {
                console.log(error)
            } finally {
                onSubmit(res.data.tripId);
            }
        })
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="destination" className="text-sm">
                        Enter a destination
                        </label>
                        <input
                                name="destination"
                                id="destination"
                                type="text"
                                value=""
                                placeholder="Cancun, Mexico"
                                onChange={(e) => handleInputChange("destination", e.target.value)}
                                className="text-gray-900 text-sm border-silverBlue-2 border border-black rounded px-2.5 py-2 focus:outline-none focus:ring-0 w-2/3"
                            />
                    </div>
                    <div className="flex w-2/3 gap-6">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="arrival" className="text-sm">
                                Arrival
                            </label>
                            <input
                                    name="arrival"
                                    id="arrival"
                                    type="text"
                                    value=""
                                    placeholder="08/11/2024"
                                    onChange={(e) => handleInputChange("arrival", e.target.value)}
                                    className="text-gray-900 text-sm border-silverBlue-2 border border-black rounded px-2.5 py-2 focus:outline-none focus:ring-0"
                                />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="departure" className="text-sm">
                                Departure
                            </label>
                            <input
                                    name="departure"
                                    id="departure"
                                    type="text"
                                    value=""
                                    placeholder="08/20/2024"
                                    onChange={(e) => handleInputChange("arrival", e.target.value)}
                                    className="text-gray-900 text-sm border-silverBlue-2 border border-black rounded px-2.5 py-2 focus:outline-none focus:ring-0"
                                />
                        </div>
                    </div>
                </div>
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <label htmlFor={item.title} className="text-sm">
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
                                className="text-gray-900 text-sm border border-black rounded px-2.5 py-2 focus:outline-none focus:ring-0 w-2/3"
                            />
                        }
                        {item.inputType === "date" &&
                            <input
                                name={item.title}
                                id={item.title}
                                type="text"
                                value={inputValues[item.title] || ''}
                                placeholder={item.placeholder}
                                onChange={(e) => handleInputChange(item.title, e.target.value)}
                                className="text-gray-900 text-sm border border-black rounded px-2.5 py-2 focus:outline-none focus:ring-0 w-2/3"
                            />
                        }
                        {item.inputType === "invite" && 
                            <div className="flex gap-6 w-2/3">
                                <input
                                    name={item.title}
                                    id={item.title}
                                    type="text"
                                    value={inputValues[item.title] || ''}
                                    placeholder={item.placeholder}
                                    onChange={(e) => handleInputChange(item.title, e.target.value)}
                                    className="text-gray-900 text-sm border border-black rounded px-2.5 py-2 focus:outline-none focus:ring-0 w-full"
                                />
                                {/* <button onClick={handleInvite} className="flex px-6 text-white bg-[#0267FF] rounded justify-center items-center">
                                    Invite
                                </button> */}
                            </div>
                        }
                    </div>
                ))}
                <button 
                    type="submit"
                    className="flex mt-4 px-6 py-2.5 w-40 text-white bg-[#080E1E] rounded-full justify-center"
                >
                    Next</button>
            </form>
        </div>
    );
}

