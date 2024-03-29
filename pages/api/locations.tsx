import type { NextApiRequest, NextApiResponse } from "next";
import  fs  from 'fs';
//import type { Todos } from "../../interfaces";
import Location from '../../data/locations/1.json';
import LocationTwo from '../../data/locations/2.json';
import LocationThree from '../../data/locations/3.json';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any[]>,
) {



if(
  _req.query.company === undefined
)

  res.status(200).json([...Location,...LocationTwo,...LocationThree]);
}



