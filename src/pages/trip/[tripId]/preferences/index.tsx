'use client'
import Image from "next/image";
import axios from 'axios'
import { useState } from "react";
import TripDetailsForm from "@/components/TripDetailsFrom";
import { useRouter } from "next/router";
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })

export default function Preferences() {
  const router = useRouter()
  const tripId = router.query.tripId as string

  const onSubmit = () => {
    router.push(`/trip/${tripId}`)
  }

  if (!tripId) {
    return <h1>404 - Page Not Found</h1>
  }

  return (
    <main>
      <div className={`py-10 px-16 flex flex-col gap-10 relative overflow-hidden ${inter.className}`}>
        <div className="bg-[#D5AEE4] opacity-15 absolute top-[0rem] right-[0rem] h-[40rem] w-[40rem] rounded-full blur-[7rem] z-0"></div>
        <div className="bg-[#AEC7E4] opacity-15 absolute top-[20rem] -left-[10rem] h-[75rem] w-[75rem] rounded-full blur-[7rem] z-0"></div>
        <div className="flex gap-4 items-center">
            <Image
              src="/logo.png"
              alt="Description of my image"
              width={46}
              height={46}
            />
            <div className="font-semibold text-2xl z-10">trippin'</div>
        </div>
          <div className="py-10 px-10 flex flex-col gap-10">
          <h1 className="font-semibold text-4xl z-10">Your preferences</h1>
          <div className="z-10">
            < TripDetailsForm tripId={tripId} onSubmit={onSubmit}/>
          </div>
        </div>
      </div>
    </main>
  );
}
