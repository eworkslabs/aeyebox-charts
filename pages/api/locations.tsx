import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import axios from "axios";

export default async function handler(_req: NextApiRequest, res: NextApiResponse<[]>) {
  const file = fs.readFileSync(__dirname + '/../../../../data/locations/' + _req.query.company_id + '.json', 'utf8');
  const data = JSON.parse(file);
  return res.status(200).json(data);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  };

  //const data = Companies;
  const response = await axios.get(`${process.env.API_URL}/locations/custom?company_id=${_req.query.company_id}`, {
    headers: headers,
  });

  res.status(200).json(response.data);
}
