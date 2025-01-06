import type { NextApiRequest, NextApiResponse } from 'next';
import apiConsumer from '@/utils/apiConsumer';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { entity } = req.query;

  try {
    let response;

    switch (method) {
      case 'GET':
        try {
          // Tenta consumir a API
          response = await apiConsumer(`${process.env.API_URL}/${entity}/custom`, process.env.API_TOKEN);
          return res.status(200).json(response.data);
        } catch (apiError) {
          console.warn(`API está indisponível. Usando fallback local para ${entity}`);
          // Fallback para dados locais
          const filePath = path.join(process.cwd(), 'data', `${entity}/${entity}.json`);
          const fallbackData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          return res.status(200).json(fallbackData);
        }

      case 'POST':
        try {
          // Tenta consumir a API
          response = await apiConsumer(`${process.env.API_URL}/${entity}`, process.env.API_TOKEN, 'POST', req.body);
          return res.status(201).json(response.data);
        } catch (apiError) {
          console.warn(`API está indisponível. Requisição POST não pode ser processada.`);
          return res.status(503).json({ error: 'API temporariamente indisponível' });
        }

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Erro interno na API:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
