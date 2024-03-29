import type { NextApiRequest, NextApiResponse } from "next";
import  fs  from 'fs';
//import type { Todos } from "../../interfaces";
import Machine from '../../data/machines/1111.json';
import MachineTwo from '../../data/machines/2111.json';
import MachineThree from '../../data/machines/3111.json';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any[]>,
) {



if(
  _req.query.company === undefined
)

  res.status(200).json([...Machine,...MachineTwo,...MachineThree]);
}



