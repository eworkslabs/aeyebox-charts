import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import DatePicker from "@/components/calendar/DatePicker";
import { countOptions, speedOptions, stopsOptions } from "../optionsgraphic/Options";


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
        console.log(typeof selectedDate, selectedDate, new Date (selectedDate));
      
        const machinesQuery = selectedMachines.map((machine) => machine.value).join(",");
        const response = await fetch(`http://localhost:3000/api/telemetries?date=${selectedDate.getFullYear()}-${selectedDate.getMonth().toString().padStart(2,"0")}-${selectedDate.getDay().toString().padStart(2,"0")}&machines=${machinesQuery}`);
        
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

  console.log((kpis))

  return (
    <div>
      {kpis.map((item, index) => (
        <div key={item.name}  className=" flex flex-row gap-5 font-murecho">
          {item.name} 
          {/* <div className=" bg-silver w-[1865px] h-[35px]" /> */}
          <div className=" text-lg  w-24 h-7">
            <p className="m-0">KPIs</p>
          </div>
          <div className="text-lg w-24 h-7">
            <p className="m-0">Count</p>
          </div>
          <div className=" w-24 h-7 text-lg">
            <p className="m-0">
              <span>Low</span>
              <span className="text-mid">/s</span>
            </p>
          </div>
          <div className=" text-lg  w-24 h-7">
            <p className="m-0">High/s</p>
          </div>
          <div className="  text-lg  w-24 h-7">Stop</div>

          <div className="  w-24 h-7">{item.data.counts}</div>
          <div className="  w-24 h-7">{item.name}</div>
          <div className=" w-24 h-7">{item.data.lows}</div>

          <div className=" w-24 h-7">
            <p className="m-0">{item.data.highs}</p>
          </div>

          <div className="  w-24 h-7">
            <p className="m-0">{item.data.stops}</p>
          </div>

          <div className=" box-border w-[1866px] h-px border-t-[1px] border-solid border-silver" />
        </div>
      ))}

      <div className="Charts">
        <Chart options={countOptions} series={countsSeries} type="line" height={350} width={1250}  />
        <Chart options={speedOptions} series={speedsSeries} type="area" height={350} width={1250}  />
        <Chart options={stopsOptions} series={stopsSeries} type="bar" height={350} width={1250}  />
      </div>
    </div>
  );
};

export default Telemetries;

