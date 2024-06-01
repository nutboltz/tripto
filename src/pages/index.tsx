import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Home() {

  const [tripId, setTripId] = useState('')
  const router = useRouter()

  const destination = "san francisco"
  const startDate = "2024-06-01"
  const endDate = "2024-06-07"
  const participants = ["eunicehx920@gmail.com", "eunicehx920+1@gmail.com", "eunicehx920+2@gmail.com"]

  const handleClick = () => {
    axios.post(process.env.NEXT_PUBLIC_BASE_URL+ '/api/createTrip',
    {
      destination,
      startDate,
      endDate,
      participants
    }
    ).then(res => {
      const { tripId } = res.data
      setTripId(tripId)
      router.push(`/trip/${tripId}`)
    })
  }

  return (
    <>
      <button onClick={handleClick}>
        Create New Trip
      </button>
      <p>Trip Id: {tripId}</p>
    </>
  );
}
