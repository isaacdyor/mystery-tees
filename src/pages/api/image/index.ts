import type { NextApiRequest, NextApiResponse } from 'next';
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    if (process.env.BASE_URL && process.env.PRINTIFY_TOKEN) {
      fetch(`${process.env.BASE_URL}uploads/images.json`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.PRINTIFY_TOKEN}`,
        },
        body: JSON.stringify(req.body),
      })
      .then(response => response.text())
      .then((response) => {
        res.status(201).json(response);
      })
      .catch(err => console.log(err))
    }
  } else {
    if (req.method) {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
    }
  }
}