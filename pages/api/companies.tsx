import type { NextApiRequest, NextApiResponse } from "next";
import  fs  from 'fs';
//import type { Todos } from "../../interfaces";
import Companies from '../../data/companies/companies.json';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any[]>,
) {


  res.status(200).json(Companies);
}



