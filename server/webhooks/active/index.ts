import { NowRequest, NowResponse } from '@vercel/node'

export default async (request: NowRequest, response: NowResponse): Promise<void> => {
  response.status(200).json({ ping: 'OK' })
}
