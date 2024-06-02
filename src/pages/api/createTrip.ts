import type { NextApiRequest, NextApiResponse } from 'next'
import { getPrismaClient } from '../../server/lib/prisma'
import { itineraryPlaceholder } from '@/lib/data';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    
  const { destination, startDate, endDate, participants } = req.body

  const prisma = getPrismaClient();
  const id = "demo"

  const trip = await prisma.trip.upsert({
    where: {
      id
    },
    update: {
      id,
      destination,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      participants: {
        connectOrCreate: participants.map((email: string) => {
          return {
              where: { email },
              create: { email },
          };
      })
      },
      itinerary: itineraryPlaceholder,
    },
    create: {
      id,
      destination,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      itinerary: itineraryPlaceholder,
      participants: {
        connectOrCreate: participants.map((email: string) => {
          return {
              where: { email },
              create: { email },
          };
      })
      },
    },
  });

  return res.status(200).json({ tripId: trip.id })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}
