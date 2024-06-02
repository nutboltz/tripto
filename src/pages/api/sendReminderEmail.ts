import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '@/server/lib/mailgun';
import { RecipientsMap } from '@/interfaces/email';

 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    
  const { recipients, preferencesUrl } = req.body as { recipients: string[], preferencesUrl: string }

  const subject = "Your friends are waiting for you to submit your preferences"

  const htmlMessage = "You've been invited to join a trip! Click <a href='" + preferencesUrl + "'>here</a> to submit your preferences."

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