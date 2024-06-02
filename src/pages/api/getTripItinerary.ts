import type { NextApiRequest, NextApiResponse } from 'next'
import { getPrismaClient } from '@/server/lib/prisma'
import { itineraryPlaceholder } from '@/lib/data'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const  { tripId } = req.query as { tripId: string }
  return res.status(200).json({ itinerary: itineraryPlaceholder })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}
