'use client';

import { useState } from 'react';
import { parsedTikTokLinks, tripDetails } from '../lib/data';
import { tripDetailsType } from '../interfaces/trip';
import axios from 'axios';
import { getBaseUrl } from '@/lib/utils';
import { ParsedActivity, Preference } from '@/interfaces/itinerary';
import ActivityCard from './ActivityCard';
import { Loader2, TextSearch } from 'lucide-react';

interface TripDetailsFormProps {
    tripId: string;
    onSubmit: () => void;
}


export default function TripDetailsForm(props: TripDetailsFormProps) {
    const { tripId, onSubmit } = props;

    const data = tripDetails as tripDetailsType[];

    const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
    const [dropdownVisible, setDropdownVisible] = useState<{ [key: string]: boolean }>({});
    const [links, setLinks] = useState('');
    const [activitiesFromLinks, setActivitiesFromLinks] = useState<ParsedActivity[]>([]);
    const [activitiesFromLinksError, setActivitiesFromLinksError] = useState<string>('');
    const [isParsing, setIsParsing] = useState(false);
    const [selectedActivities, setSelectedActivities] = useState<ParsedActivity[]>([]);

    const handleInputChange = (id: string, value: string) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleDropdownChange = (id: string, value: string) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
        setDropdownVisible((prevVisibility) => ({
            ...prevVisibility,
            [id]: false,
        }));
    };

    const toggleDropdown = (id: string) => {
        setDropdownVisible((prevVisibility) => ({
            ...prevVisibility,
            [id]: !prevVisibility[id],
        }));
    };

    const handleSelect = (activity: ParsedActivity) => {
        setSelectedActivities((prevSelected) =>
          prevSelected.includes(activity)
            ? prevSelected.filter((a) => a !== activity)
            : [...prevSelected, activity]
        );
      };

    const handleUnselect = (activity: ParsedActivity) => {
        setSelectedActivities((prevSelected) => prevSelected.filter((a) => a !== activity));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const finalPref = { ...inputValues, additonalActivities: selectedActivities.map((activity) => activity.title) };

        axios.post(getBaseUrl()+ '/api/submitTripPreference',
        {
            tripId,
            userEmail: inputValues["Your email"],
            preferences: finalPref
        }
        ).then(res => {
            onSubmit();
        })
        
    };

    const onParseLinks = () => {
        setActivitiesFromLinksError('')

        const url = links
        if (!url) {
            setActivitiesFromLinksError("Please enter a link.")
            return;
        }

        setIsParsing(true);


        const activities = parsedTikTokLinks[url] ?? null;
        

        if (activities) {
            // delay for 3 seconds
            setTimeout(() => {
                setActivitiesFromLinks(activities);
                setIsParsing(false);
            }, 3000);
        } else {
            setTimeout(() => {
                setActivitiesFromLinks([]);
                setActivitiesFromLinksError("Oops! We couldn't find any activities from the link provided.")
                setIsParsing(false);
            }, 3000);
        }

        // axios.get(getBaseUrl()+ '/api/parseLink',
        // {
        //     params: {
        //         link: links,
        //     }
        // }
        // ).then(res => {
        //     setActivitiesFromLinks(res.data.activities);
        // })

        
        // parse links
    }

    const addDemoData = () => {
        setInputValues({
            "Your email": "eunicehx920@gmail.com",
            "Budget": "1000",
            "List activities or restaurants you're interested in": "Bars, food",
            "Are you a morning or night person?": "Night",
            "How would you like to travel?" : "Rental car",
            "Do you have any dietary preferences?": "No",
            "What is your vibe for the trip?": "Chill",
        });
    };

    return (
        <>
        <button onClick={addDemoData} className="text-xs flex text-black rounded-full justify-center hover:underline hover:text-gray-500 m-0 p-0">
            Add Demo Data
        </button>
        <div className="flex flex-row gap-6">
            <form onSubmit={handleSubmit} className="w-full grow-1 flex mr-4">
                <div className='w-full'>
                    <ul className=''>
                    {data.map((item, index) => (
                        <li key={index} className="flex flex-col mb-4">
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
                                    className="text-gray-900 text-sm border-black border rounded px-2.5 py-2 focus:outline-none focus:ring-0 w-full"
                                />
                            }
                            {item.inputType === "textArea" &&
                            <>
                                <p className="text-xs text-gray-500">Separate each activity with a comma</p>
                                <textarea
                                    name={item.title}
                                    id={item.title}
                                    rows={5}
                                    value={inputValues[item.title] || ''}
                                    placeholder={item.placeholder}
                                    onChange={(e) => handleInputChange(item.title, e.target.value)}
                                    className="text-gray-900 text-sm border-black border rounded px-2.5 py-2 focus:outline-none focus:ring-0 w-full"
                                />
                                {item.title === "List activities or restaurants you're interested in" ? (
                                    <>
                                    <p className="text-xs text-gray-500 mt-2 mb-1">Activities from external sources</p>
                                    {
                                        (selectedActivities.length > 0) ? (
                                            <div className="flex flex-row gap-x-2 flex-wrap gap-y-2 cursor-pointer">
                                                {selectedActivities.map((activity, index) => (
                                                    <div key={index} onClick={() => handleUnselect(activity)} className='text-xs bg-gray-200 w-fit rounded-full px-4 py-2'>
                                                        {activity.title}
                                                    </div>
                                                ))}
                                            </div>
                                        ): null}
                                    </>
                                ) : null}
                            </>

                            }
                            {item.inputType === "dropdown" &&
                                <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => toggleDropdown(item.title)}
                                    className="inline-flex items-center justify-between w-full rounded-md border border-black shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                                >
                                    {inputValues[item.title] || 'Select an option'}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                {dropdownVisible[item.title] && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                        <div className="py-1">
                                            {item.options?.map((option, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
                                                    onClick={() => handleDropdownChange(item.title, option)}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                                // <select
                                //     id={item.title}
                                //     value={inputValues[item.title] || ''}
                                //     onChange={(e) => handleInputChange(item.title, e.target.value)}
                                //     className="text-gray-900 text-sm border border-black rounded px-2.5 py-2 focus:outline-none focus:ring-0 w-full"
                                // >
                                //     {item.options?.map((option, index) => (
                                //         <option key={index} value={option}>
                                //             {option}
                                //         </option>
                                //     ))}
                                // </select>
                            }
                        </li>
                    ))} 
                    </ul>
                    <button 
                        type="submit"
                        className="flex mt-4 px-6 py-2.5 w-40 text-white bg-[#080E1E] rounded-full justify-center"
                    >
                        Submit
                    </button>
                </div>
            </form>

            <div className="max-w-96 flex flex-col bg-white p-8 shadow rounded h-fit">
                    <h2 className="text-xl font-semibold mb-2">Add links from social</h2>
                    <p className='text-xs mb-4'>Inspired by a TikTok video? Add them here!</p>
                    <div className="flex gap-4 mb-6">
                        <input
                            name="link-one"
                            id="link-one"
                            type="text"
                            value={links}
                            placeholder="https://www.tiktok.com/@visitcancun"
                            onChange={(e) => setLinks(e.target.value)}
                            className="text-gray-900 text-sm border-silverBlue-2 border border-black rounded px-2.5 py-2 focus:outline-none focus:ring-0 w-80"
                        />
                        <button className="w-20 rounded flex items-center justify-center text-white bg-[#0267FF]" onClick={onParseLinks}>
                            {isParsing ? <Loader2 className=" w-6 h-6 animate-spin"/> : <TextSearch className='w-6 h-6'/>}
                        </button>
                    </div>
                    {(activitiesFromLinks.length > 0) ? (
                        <div className="flex flex-col gap-4 overflow-y-scroll max-h-screen">
                            <div className='grid grid-cols-2 gap-x-4 gap-y-4'>
                                {activitiesFromLinks.map((activity, index) => (
                                    <div key={index} className='h-48'>
                                        <ActivityCard
                                            key={index}
                                            imageSrc={activity.imageSrc}
                                            title={activity.title}
                                            location={activity.location}
                                            rating={activity.rating || 0}
                                            category={activity.category}
                                            selected={selectedActivities.includes(activity)}
                                            onSelect={() => handleSelect(activity)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : activitiesFromLinksError? (
                        <p className='text-xs text-red-500'>{activitiesFromLinksError}</p>
                    ): null }

            </div>
        </div>
        </>
    );
}