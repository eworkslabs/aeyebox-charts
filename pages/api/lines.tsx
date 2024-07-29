import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(_req: NextApiRequest, res: NextApiResponse<[]>) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  };

  const response = await axios.get(`${process.env.API_URL}/production_lines/custom`, {
    headers: headers,
  });

  res.status(200).json(response.data);
}
