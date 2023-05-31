import type { NextApiRequest, NextApiResponse } from 'next';

const comments = [
  {
    id: 1,
    text: 'This is the first comment'
  },
  {
    id: 2,
    text: 'This is the second comment'
  },
  {
    id: 3,
    text: 'This is the third comment'
  }
]
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(comments)
}