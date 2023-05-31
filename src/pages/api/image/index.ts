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
  if (req.method === 'POST') {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}uploads/images.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PRINTIFY_TOKEN}`,
      },
      body: JSON.stringify(req.body),
    })
    .then(response => response.text())
    .then((response) => {
      res.status(201).json(response);
    })
    .catch(err => console.log(err))
    
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}