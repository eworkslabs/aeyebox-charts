import type { NextApiRequest, NextApiResponse } from "next";
import  fs  from 'fs';
//import type { Todos } from "../../interfaces";
import Telemetry from '../../data/telemetry/1.json';
import TelemetryTwo from '../../data/telemetry/2.json';
import TelemetryThree from '../../data/telemetry/3.json';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any[]>,
) {



if(
  _req.query.company === undefined
)

  res.status(200).json([...Telemetry,...TelemetryTwo,...TelemetryThree]);
}



