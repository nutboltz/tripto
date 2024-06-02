import type { NextApiRequest, NextApiResponse } from 'next'
import { getPrismaClient } from '../../server/lib/prisma'
import { fetchItineraryStatus, generateItinerary } from '@/server/itinerary';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    
  const { tripId, userEmail, preferences } = req.body

  const prisma = getPrismaClient();

  const preference = await prisma.tripPreferences.upsert({
    where: {
      tripId_userEmail: {
        tripId,
        userEmail
      }
    },
    update: {
      preferences
    },
    create: {
      tripId,
      userEmail,
      preferences
    }
    });

   const { ready } = await fetchItineraryStatus(tripId)

   if (ready) {
    generateItinerary(tripId)
   }

  return res.status(200).json({ preferenceId: preference.id })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}
