import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
    slackUsername: string
    backend: boolean
    age: number
    bio: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    res.status(200).json({
        slackUsername: 'Niscolinx',
        backend: true,
        age: 25,
        bio: 'I am a backend developer',
    })
}
