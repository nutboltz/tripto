'use client'
import Image from "next/image";
import axios from 'axios'
import { useState } from "react";

export default function Home() {

  const [submissionStatus, setSubmissionStatus] = useState("Not Submitted")

  const tripId = "2a785fc2-0509-434c-9c37-c256148c6c86"
  const email = "eunicehx920@gmail.com"
  const activities = ["hiking", "museum", "restaurant"]
  const preferences = { isMorningPerson: false, isFoodie: true, preferredActivities: activities }

  const handleClick = () => {
    axios.post(process.env.NEXT_PUBLIC_BASE_URL+ '/api/submitTripPreference',
    {
        tripId,
        userEmail: email,
        preferences,
    }
    ).then(res => {
      const { tripId } = res.data
      setSubmissionStatus("Submitted")
    })
  }

  return (
    <>
      <button onClick={handleClick}>
        Submit Preferences
      </button>
      <p>Submission Status: {submissionStatus}</p>
    </>
  );
}
