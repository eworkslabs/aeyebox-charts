import type { NextApiRequest, NextApiResponse } from "next";
import  fs  from 'fs';
//import type { Todos } from "../../interfaces";



export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<[]>,
) {



const file = fs.readFileSync(  __dirname + '/../../../../data/lines/' + _req.query.plants + '.json', 'utf8');
  const data = JSON.parse(file);

  res.status(200).json(data);
}