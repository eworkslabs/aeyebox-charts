import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { countOptions, speedOptions, stopsOptions } from "../optionsgraphic/Options";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Charts: React.FC<{ selectedMachines: { value: number; label: string }[] }> = ({ selectedMachines }) => {
  const [loading, setLoading] = useState(true);
  const [countsSeries, setCountSeries] = useState<any[]>([]);
  const [speedsSeries, setSpeedSeries] = useState<any[]>([]);
  const [stopsSeries, setStopSeries] = useState<any[]>([]);

  useEffect(() => {
    const fetchTelemetries = async () => {
      setLoading(true);
      try {
        const machinesQuery = selectedMachines.map((machine) => machine.value).join(",");
        const response = await fetch(`http://localhost:3000/api/telemetries?date=${selectedDate}&machines=${machinesQuery}`);
        const data = await response.json();

        const counts = data.map((item: any) => ({
          name: item.name,
          data: item.series.count,
        }));
        setCountSeries(counts);

        const speeds = data.map((item: any) => ({
          name: item.name,
          data: item.series.speed,
        }));
        setSpeedSeries(speeds);

        const stops = data.map((item: any) => ({
          name: item.name,
          data: item.series.stops,
        }));
        setStopSeries(stops);
      } catch (error) {
        console.error("Error fetching telemetries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTelemetries();
  }, [selectedMachines]);

  return (
    <div className="Charts">
      <div className="absolute top-[500px] left-[169px] w-[2077px] h-[385px] text-left text-3xl text-black">
        <div className="absolute top-[0px] left-[93px] font-medium whitespace-pre-wrap inline-block w-[89.1px]">→ Count</div>
        <Chart className="absolute top-[calc(50%_-_155.5px)] left-[0px]  w-[2077px] h-[348px]" options={countOptions} series={countsSeries} type="line" />
      </div>

      <div className="absolute top-[905px] left-[169px] w-[2077px] h-[385px] text-left text-3xl text-black">
        <div className="absolute top-[0px] left-[93px] font-medium inline-block w-[89.1px]">→ Speed</div>
        <Chart className="absolute h-[90.39%] top-[9.61%] bottom-[0%] left-[0px] w-[2077px]" options={countOptions} series={countsSeries} type="line" height={350} />
      </div>

      <div className="absolute top-[1310px] left-[169px] w-[2077px] h-[385px] text-left text-3xl text-black">
        <div className="absolute top-[0px] left-[93px] font-medium whitespace-pre-wrap inline-block w-[89.1px]">→ Stops</div>
        <Chart className="absolute h-[90.39%] top-[9.61%] bottom-[0%] left-[0px] w-[2077px]" options={stopsOptions} series={stopsSeries} type="bar" height={350} />
      </div>
    </div>
  );
};

export default Charts;
