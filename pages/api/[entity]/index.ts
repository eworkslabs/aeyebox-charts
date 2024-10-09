import type { NextApiRequest, NextApiResponse } from 'next';
import apiConsumer from '@/utils/apiConsumer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { entity } = req.query;

  try {
    let response;
    switch (method) {
      case 'GET':
        response = await apiConsumer(`${process.env.API_URL}/${entity}/custom`, process.env.API_TOKEN);
        return res.status(200).json(response.data);
      case 'POST':
        response = await apiConsumer(`${process.env.API_URL}/${entity}`, process.env.API_TOKEN, 'POST', req.body);
        return res.status(201).json(response.data);
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
