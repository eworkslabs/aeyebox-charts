import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import Companies from "../../data/companies/companies.json";
import axios from "axios";

export default async function handler(_req: NextApiRequest, res: NextApiResponse<any[]>) {

  res.status(200).json(Companies);
  
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  };

  //const data = Companies;
  const response = await axios.get(`${process.env.API_URL}/companies/custom`, {
    headers: headers,
  });

  res.status(200).json(response.data);
}
