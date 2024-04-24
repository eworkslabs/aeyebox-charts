"use client";
import React, { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import DatePicker from "@/components/calendar/DatePicker";
import { countOptions, speedOptions, stopsOptions } from "../optionsgraphic/Options";
import { table } from "console";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Telemetries: React.FC<{ selectedMachines: { value: number; label: string }[]; selectedDate: any }> = ({ selectedMachines, selectedDate }) => {
  const [loading, setLoading] = useState(true);
  const [countsSeries, setCountSeries] = useState<any[]>([]);
  const [speedsSeries, setSpeedSeries] = useState<any[]>([]);
  const [stopsSeries, setStopSeries] = useState<any[]>([]);
  const [kpis, setKpis] = useState<any[]>([]);
  const [nCountOptions, setNCountOptions] = useState<any>({});
  const [nSpeedOptions, setNSpeedOptions] = useState<any>({});
  const [nStopsOptions, setNStopOptions] = useState<any>({});

  useEffect(() => {
    const fetchTelemetries = async () => {
      setLoading(true);
      try {
        const date = (!selectedDate ? new Date() : new Date(selectedDate)).toISOString().split("T")[0];

        const machinesQuery = selectedMachines.map((machine) => machine.value).join(",");

        console.log(`/api/telemetries?date=${date}&machines=${machinesQuery}`);

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

        const colors = data.map((item: any) => item.color);
        setNCountOptions({ ...countOptions, ...{ colors } });
        setNStopOptions({ ...stopsOptions, ...{ colors } });
        setNSpeedOptions({ ...speedOptions, ...{ colors } });

        // console.log('options', nCountOptions, nSpeedOptions, nStopsOptions);

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
            <tr className="bg-silver" key={index}>
              <td style={{ backgroundColor: item.color }}>{item.name}</td>
              <td style={{ backgroundColor: item.color }}>{item.data.counts}</td>
              <td style={{ backgroundColor: item.color }}>{item.data.lows}</td>
              <td style={{ backgroundColor: item.color }}>{item.data.highs}</td>
              <td style={{ backgroundColor: item.color }}>{item.data.stops}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full mt-10">
        <Chart options={nCountOptions} series={countsSeries} type="line" height={350} />
        <Chart options={nSpeedOptions} series={speedsSeries} type="area" height={350} />
        <Chart options={nStopsOptions} series={stopsSeries} type="bar" height={350} />
      </div>
    </div>
  );
};

export default Telemetries;
