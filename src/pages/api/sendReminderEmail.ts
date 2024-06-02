import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '@/server/lib/mailgun';

 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    
  const { recipients, preferencesUrl } = req.body as { recipients: string[], preferencesUrl: string }

  const subject = "There has been an update to your trip"

  const htmlMessage = "Click <a href='" + preferencesUrl + "'>here</a> to review the latest updates to your trip."

  await sendEmail(
    recipients, 
    subject,
    htmlMessage
  )

  return res.status(200).json({ success: true })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}