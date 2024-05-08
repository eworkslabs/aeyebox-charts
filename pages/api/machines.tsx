import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(_req: NextApiRequest, res: NextApiResponse<any[]>) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  };
  console.log(_req.body);
  if (_req.method === "POST") {
    const response = await axios.post(
      `${process.env.API_URL}/plants`,
      {
        name: _req.body.name,
      },
      {
        headers,
      }
    );

    return res.status(200).json(response.data);
  } else if (_req.method === "PUT") {
    const response = await axios.put(
      `${process.env.API_URL}/machines/${_req.body.id}`,
      {
        id: _req.body.id,
        name: _req.body.name,
      },
      {
        headers,
      }
    );

    return res.status(200).json(response.data);
  } else if (_req.method === "GET") {
    const response = await axios.get(`${process.env.API_URL}/machines/custom?line_id=${_req.query.line_id}`, {
      headers: headers,
    });

    return res.status(200).json(response.data);
  }

  res.status(405).json({ error: "Method Not Allowed" });
}
