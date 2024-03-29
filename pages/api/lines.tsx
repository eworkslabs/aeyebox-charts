import type { NextApiRequest, NextApiResponse } from "next";
import  fs  from 'fs';
//import type { Todos } from "../../interfaces";
import Lines from '../../data/lines/111.json';
import LinesTwo from '../../data/lines/211.json';
import LinesThree from '../../data/lines/311.json';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any[]>,
) {



if(
  _req.query.company === undefined
)

  res.status(200).json([...Lines,...LinesTwo,...LinesThree]);
}



