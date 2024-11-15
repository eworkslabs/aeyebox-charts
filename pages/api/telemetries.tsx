import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default function handler(_req: NextApiRequest, res: NextApiResponse<[]>) {
  const machineIds: string[] = _req?.query?.machines.split(",") || [];

  let machines: string[] = [];

  if (machineIds.length) {
    try {
      machineIds.map((id: any) => {
        if (!id) return;
        let file = fs.readFileSync(__dirname + "/../../../../data/telemetries/" + id + ".json", "utf8");
        let data = JSON.parse(file);
        machines = machines.concat(data);
      });
    } catch (error) {}
  }

  res.status(200).json(machines);
}
