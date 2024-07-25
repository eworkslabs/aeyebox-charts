import type { NextApiRequest, NextApiResponse } from "next";
import type { Series } from "@/interfaces";

function random(len: number = 23, min: number = 0, max: number = 100) {
  const ret = [];
  ++len;
  --max;
  for (let i = min; i < len; i++) {
    ret.push(Math.floor(Math.random() * max));
  }
  return ret;
}

export default function handler(_req: NextApiRequest, res: NextApiResponse<Series[]>) {
  const series: any = [
    {
      name: "Sensor 1",
      data: random(),
    },
    {
      name: "Sensor 2",
      data: random(),
    },
    {
      name: "Sensor 3",
      data: random(),
    },
  ];

  res.status(200).json(series);
}
