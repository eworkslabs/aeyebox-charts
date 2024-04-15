import type { NextApiRequest, NextApiResponse } from "next";
import  fs  from 'fs';
import Companies from '../../data/companies/companies.json';

console.log(process.env);

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any[]>,
) {


  res.status(200).json(Companies);
}



