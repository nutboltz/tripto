'use client'
import Image from "next/image";
import axios from 'axios'
import { useState } from "react";
import TripDetailsForm from "@/components/TripDetailsFrom";
import { useRouter } from "next/router";

export default function Preferences() {
  const router = useRouter()
  const tripId = router.query.tripId as string

  const onSubmit = () => {
    router.push(`/trip/${tripId}`)
  }

  return (
    <main>
      <div className="flex gap-16">
        {tripId ? < TripDetailsForm tripId={tripId} onSubmit={onSubmit}/> : <h1>404 - Page Not Found</h1>}
      </div>
    </main>
  );
}
