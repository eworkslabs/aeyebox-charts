import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import axios from "axios";

export default function handler(_req: NextApiRequest, res: NextApiResponse<[]>) {
  //const file = fs.readFileSync(  __dirname + '/../../../../data/plants/' + _req.query.locations + '.json', 'utf8');
  //const data = JSON.parse(file);

  _req.query.location_id;

  res.status(200).json(data);
}
