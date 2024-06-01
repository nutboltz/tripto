import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('Hello from Next.js!')
  return Response.json({ message: 'Hello from Next.js!' })
}
