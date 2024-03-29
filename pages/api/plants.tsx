import type { NextApiRequest, NextApiResponse } from "next";
import  fs  from 'fs';
//import type { Todos } from "../../interfaces";
import Plants from '../../data/plants/11.json';
import PlantsTwo from '../../data/plants/21.json';
import PlantsThree from '../../data/plants/31.json';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any[]>,
) {



if(
  _req.query.company === undefined
)

  res.status(200).json([...Plants,...PlantsTwo,...PlantsThree]);
}



