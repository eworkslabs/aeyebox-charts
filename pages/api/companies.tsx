import type { NextApiRequest, NextApiResponse } from "next";
import companies from "@/data/companies/companies.json";
//import type { Todos } from "../../interfaces";



export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<[]>,
) {

console.log(_req.query)

  res.status(200).json(companies);
}
