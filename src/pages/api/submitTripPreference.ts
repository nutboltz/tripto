import type { NextApiRequest, NextApiResponse } from 'next'
import { getPrismaClient } from '../../server/lib/prisma'
 
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

    // If the user is the last one to submit their preferences, we can now create the trip
    const trip = await prisma.trip.findUnique({
      where: {
        id: tripId
      },
      include: {
        participants: true
      }
    })

    const submittedPreferences = await prisma.tripPreferences.findMany({
        where: {
            tripId
        }
    })




  return res.status(200).json({ preferenceId: preference.id })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}
