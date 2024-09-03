import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default function handler(_req: NextApiRequest, res: NextApiResponse<any>) {

  let machineIds = [];

  const machinesData = _req?.query?.machines;

  if (typeof machinesData === 'string') {

    machineIds = Array.isArray(machinesData) ? machinesData.split(",") : [];

  }

  let machines = [];

  if (machineIds.length) {
    try {
      machineIds.map((id: any) => {
        if (!id) return;
        let file = fs.readFileSync(__dirname + "/../../../../data/telemetries/" + id + ".json", "utf8");
        let data = JSON.parse(file);
        machines = machines.concat(data);
        console.log("api", machines)
      });
    } catch (error) { }
  }

  res.status(200).json(machines);
}
