import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(_req: NextApiRequest, res: NextApiResponse<[]>) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  };

  try { 
    const response = await axios.get(`${process.env.API_URL}/machines/custom?line_id=${_req.query.line_id}`, {
      headers: headers,
    });
    
  res.status(200).json(response.data);
  } catch(err) {}  
    
}
