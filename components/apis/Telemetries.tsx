import React, { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import DatePicker from "@/components/calendar/DatePicker";
import { countOptions, speedOptions, stopsOptions } from "../optionsgraphic/Options";
import { table } from "console";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Telemetries: React.FC<{ selectedMachines: { value: number; label: string }[] }> = ({ selectedMachines }) => {
  const [loading, setLoading] = useState(true);
  const [countsSeries, setCountSeries] = useState<any[]>([]);
  const [speedsSeries, setSpeedSeries] = useState<any[]>([]);
  const [stopsSeries, setStopSeries] = useState<any[]>([]);
  const [kpis, setKpis] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchTelemetries = async () => {
      setLoading(true);
      try {
        console.log(typeof selectedDate, selectedDate, new Date(selectedDate));

        const machinesQuery = selectedMachines.map((machine) => machine.value).join(",");
        const response = await fetch(`http://localhost:3000/api/telemetries?date=${selectedDate.getFullYear()}-${selectedDate.getMonth().toString().padStart(2, "0")}-${selectedDate.getDay().toString().padStart(2, "0")}&machines=${machinesQuery}`);

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

        const kpisData = data.map((item: any) => ({
          name: item.name,
          color: item.color,
          data: item.kpis,
        }));
        setKpis(kpisData);
      } catch (error) {
        console.error("Error fetching telemetries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTelemetries();
  }, [selectedMachines, selectedDate]);

  console.log(kpis);

  return (
    <div>
      <table className="w-full table-fixed">
            <thead className="bg-silver pt-5 text-zinc-600 ">
              <tr>
                <th>KPIs</th>
                <th>Count</th>
                <th>Low/s</th>
                <th>Highs/s</th>
                <th>Stop</th>
              </tr>
            </thead>
            <tbody className="text-black pt-5">
        {kpis.map((item) => (
          <>
              <tr>
                <td>{item.name}</td>
                <td>{item.data.counts}</td>
                <td>{item.data.lows}</td>
                <td>{item.data.highs}</td>
                <td>{item.data.stops}</td>
              </tr>
          </>
        ))}
        </tbody>
      </table>
      <div className="w-full mt-9">
        <Chart options={countOptions} series={countsSeries} type="line" height={350} />
        <Chart options={speedOptions} series={speedsSeries} type="area" height={350} />     
        <Chart options={stopsOptions} series={stopsSeries} type="bar" height={350} />
      </div>
    </div>



  )
};


export default Telemetries;
