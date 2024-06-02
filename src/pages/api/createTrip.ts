import type { NextApiRequest, NextApiResponse } from 'next'
import { getPrismaClient } from '../../server/lib/prisma'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    
  const { destination, startDate, endDate, participants } = req.body

  const prisma = getPrismaClient();

  const trip = await prisma.trip.create({
    data: {
      destination,
      startDate: new Date(startDate), // convert to utc to avoid timezone?
      endDate: new Date(endDate),
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
