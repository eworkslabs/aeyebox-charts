import type { NextApiRequest, NextApiResponse } from 'next';
import apiConsumer from '@/utils/apiConsumer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { entity, id } = req.query;

  try {
    let response;
    switch (method) {
      case 'GET':
        response = await apiConsumer(`${process.env.API_URL}/${entity}/${id}`, process.env.API_TOKEN);
        return res.status(200).json(response.data);
      case 'PUT':
        response = await apiConsumer(`${process.env.API_URL}/${entity}/${id}`, process.env.API_TOKEN, 'PUT', req.body);
        return res.status(200).json(response.data);
      case 'DELETE':
        response = await apiConsumer(`${process.env.API_URL}/${entity}/${id}`, process.env.API_TOKEN, 'DELETE');
        return res.status(204).end();
      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
