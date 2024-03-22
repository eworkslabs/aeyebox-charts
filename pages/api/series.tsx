import type { NextApiRequest, NextApiResponse } from "next";
import type { Series } from "../../interfaces";

const series: Series[] = [{
    name:'Sensor 1',
    data: [10, 28, 20, 4, 3, 60, 7, 80, 9, 17, 100, 23, 65, 23, 9, 17, 34, 10, 80, 24, 21, 56, 39, 50],
},{
    name:'Sensor 2',
    data: [15, 21, 11, 4, 3, 60, 7, 60, 9, 15, 89, 12, 89, 54, 67, 23, 17, 90, 32, 20, 54, 29, 10, 78]
} 
]

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Series[]>
) {
  res.status(200).json(series);
}
