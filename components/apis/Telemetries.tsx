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

        // const date = `${selectedDate.getFullYear()}-${selectedDate.getMonth().toString().padStart(2, "0")}-${selectedDate.getDay().toString().padStart(2, "0")}`;
        const date = selectedDate.toISOString().split('T')[0];

        const machinesQuery = selectedMachines.map((machine) => machine.value).join(",");
        const response = await fetch(`/api/telemetries?date=${date}&machines=${machinesQuery}`);

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

        const colors = data.map((item: any) => (item.color));
        console.log(colors);
        countOptions.colors = colors; // nao funciona pq eh const

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
      <table className="w-full pt-7 table-fixed">
            <thead className="bg-[#2F2F2F]  text-slate-50 ">
              <tr>
                <th>KPIs</th>
                <th>Count</th>
                <th>Low/s</th>
                <th>Highs/s</th>
                <th>Stop</th>
              </tr>
            </thead>
            <tbody className="text-black pt-5">
        {kpis.map((item, index) => (
          <>
              <tr className="bg-silver">
                <td style={{ backgroundColor: item.color }}>{item.name}</td>
                <td style={{ backgroundColor: item.color }}>{item.data.counts}</td>
                <td style={{ backgroundColor: item.color }}>{item.data.lows}</td>
                <td style={{ backgroundColor: item.color }}>{item.data.highs}</td>
                <td style={{ backgroundColor: item.color }}>{item.data.stops}</td>
              </tr>
          </>
        ))}
        </tbody>
      </table>
      <div className="w-full mt-10">
        <Chart options={countOptions} series={countsSeries} type="line" height={350} />
        <Chart options={speedOptions} series={speedsSeries} type="area" height={350} />     
        <Chart options={stopsOptions} series={stopsSeries} type="bar" height={350} />
      </div>
    </div>



  )
};


export default Telemetries;
