import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import DatePicker from "@/components/calendar/DatePicker";
import { countOptions, speedOptions, stopsOptions } from "../optionsgraphic/Options";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const KpiChart: React.FC<{ selectedMachines: { value: number; label: string }[] }> = ({ selectedMachines }) => {
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


  return (
    <div className="flex flex-col space-y-6">
      {kpis.map((item, index) => (
        <div className="flex items-center space-x-4" key={index}>
          <h2 className="text-lg font-semibold mt-5 mx-5">{item.name}</h2>
          <div className="flex space-x-2 mt-5">
            <div className="flex flex-col justify-center p-4 w-[330px] rounded" style={{ backgroundColor: item.color }}>
              <span className="text-left text-xl font-medium ">COUNT/S:</span>
              <span className="text-center text-2xl font-semibold ">{item.data.counts}</span>
            </div>
            <div className="flex flex-col justify-center p-4 w-[330px] rounded" style={{ backgroundColor: item.color }}>
              <span className="text-left text-xl font-medium">LOW/S:</span>
              <span className="text-center text-2xl font-semibold">{item.data.lows}</span>
            </div>
            <div className="flex flex-col justify-center p-4 w-[330px] rounded" style={{ backgroundColor: item.color }}>
              <span className="text-left text-xl font-medium">HIGH/S:</span>
              <span className="text-center text-2xl font-semibold">{item.data.highs}</span>
            </div>
            <div className="flex flex-col justify-center p-4 w-[330px] rounded" style={{ backgroundColor: item.color }}>
              <span className="text-left text-xl font-medium">STOP/S:</span>
              <span className="text-center text-2xl font-semibold">{item.data.stops}</span>
            </div>
          </div>
        </div>
      ))}

      <div className="Calendar p-4 ">
        <label className="pr-4 ml-[3px]" htmlFor="Calendar">
          Date:
        </label>
        <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>

      <div className="Charts">
        <Chart options={countOptions} series={countsSeries} type="line" height={350} width={1500} />
        <Chart options={speedOptions} series={speedsSeries} type="area" height={350} width={1500} />
        <Chart options={stopsOptions} series={stopsSeries} type="bar" height={350} width={1500} />
      </div>
    </div>
  );
};

export default KpiChart;
