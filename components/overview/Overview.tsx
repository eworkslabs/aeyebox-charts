import { useState } from "react";
import Charts from "./Charts";
import ResultsKpi from "./ResultsKpi";
import TitleOverview from "./TitleOverview";
import Welcome from "./Welcome";
import Telemetries from "../apis/Telemetries";

export default function Overview(){
  const [selectedMachines] = useState<{ value: number; label: string }[]>([]);
  const [selectedDate] = useState(new Date());
  return(
    <section>
      <div>
        <Welcome />
      </div>
      <div className="bg-white">
        <TitleOverview />
        <Telemetries selectedMachines={selectedMachines} selectedDate={selectedDate} />
      </div>
    </section>
  )
}
