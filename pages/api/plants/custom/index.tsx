import type { NextApiRequest, NextApiResponse } from "next";
import  fs  from 'fs';




export default function handler(

  _req: NextApiRequest,

  res: NextApiResponse<[]>,

) {


const file = fs.readFileSync(  __dirname + '/../../../../data/plants/' + _req.query.locations + '.json', 'utf8');

  const data = JSON.parse(file);




  res.status(200).json(data);

}