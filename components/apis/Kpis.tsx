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
    <div>
      {kpis.map((item, index) => (
        <div className="w-full relative bg-white h-[1649px] overflow-hidden text-center text-mid text-darkslategray font-murecho">
          <div className="absolute top-[315px] left-[265px] bg-silver w-[1865px] h-[35px]" />
          <div className="absolute top-[317px] left-[263px] text-lg inline-block w-24 h-7">
            <p className="m-0">KPIs</p>
          </div>
          <div className="absolute top-[317px] left-[558px] text-lg inline-block w-24 h-7">
            <p className="m-0">Count</p>
          </div>
          <div className="absolute top-[317px] left-[768px] inline-block w-24 h-7 text-lg">
            <p className="m-0">
              <span>Low</span>
              <span className="text-mid">/s</span>
            </p>
          </div>
          <div className="absolute top-[318px] left-[982px] text-lg inline-block w-24 h-7">
            <p className="m-0">High/s</p>
          </div>
          <div className="absolute top-[319px] left-[1196px] text-lg inline-block w-24 h-7">Stop</div>

          <div className="absolute top-[358px] left-[558px] inline-block w-24 h-7">{item.data.counts}</div>
          <div className="absolute top-[358px] left-[263px] inline-block w-24 h-7">{item.name}</div>
          <div className="absolute top-[358px] left-[768px] inline-block w-24 h-7">{item.data.lows}</div>

          <div className="absolute top-[359px] left-[976px] inline-block w-24 h-7">
            <p className="m-0">{item.data.highs}</p>
          </div>

          <div className="absolute top-[358px] left-[1196px] inline-block w-24 h-7">
            <p className="m-0">{item.data.stops}</p>
          </div>

          <div className="absolute top-[393.5px] left-[262.5px] box-border w-[1866px] h-px border-t-[1px] border-solid border-silver" />
        </div>
      ))}

      <div className="Charts">
        <Chart options={countOptions} series={countsSeries} type="line" height={350}  />
        <Chart options={speedOptions} series={speedsSeries} type="area" height={350}  />
        <Chart options={stopsOptions} series={stopsSeries} type="bar" height={350}  />
      </div>
    </div>
  );
};

export default KpiChart;
{
  /* <div className="absolute top-[0px] left-[169px] bg-gainsboro w-[2077px] h-[1649px]" />
<div className="absolute top-[41px] left-[263px] text-3xl font-medium text-black whitespace-pre-wrap text-left">→ Overview</div>
<img className="absolute top-[38.3px] right-[42px] w-5 h-[26.3px]" alt="" src="/vector.svg" />
<img className="absolute top-[39.5px] right-[85.5px] w-[25px] h-[26.3px]" alt="" src="/vector.svg" />
<div className="absolute top-[315px] left-[265px] bg-silver w-[1865px] h-[35px]" />
<div className="absolute top-[317px] left-[263px] text-lg inline-block w-24 h-7">
  <p className="m-0">KPIs</p>
</div>
<div className="absolute top-[317px] left-[558px] text-lg inline-block w-24 h-7">
  <p className="m-0">Count</p>
</div>
<div className="absolute top-[317px] left-[768px] inline-block w-24 h-7 text-lg">
  <p className="m-0">
    <span>Low</span>
    <span className="text-mid">/s</span>
  </p>
</div>
<div className="absolute top-[318px] left-[982px] text-lg inline-block w-24 h-7">
  <p className="m-0">High/s</p>
</div>
<div className="absolute top-[319px] left-[1196px] text-lg inline-block w-24 h-7">Stop</div>
<div className="absolute top-[358px] left-[558px] inline-block w-24 h-7">10</div>
<div className="absolute top-[358px] left-[263px] inline-block w-24 h-7">S-01</div>
<div className="absolute top-[400px] left-[264px] inline-block w-24 h-7">S-02</div>
<div className="absolute top-[400px] left-[558px] inline-block w-24 h-7">20</div>
<div className="absolute top-[358px] left-[768px] inline-block w-24 h-7">20</div>
<div className="absolute top-[400px] left-[768px] inline-block w-24 h-7">40</div>
<div className="absolute top-[359px] left-[976px] inline-block w-24 h-7">
  <p className="m-0">30</p>
</div>
<div className="absolute top-[400px] left-[976px] inline-block w-24 h-7">
  <p className="m-0">60</p>
</div>
<div className="absolute top-[358px] left-[1196px] inline-block w-24 h-7">
  <p className="m-0">40</p>
</div>
<div className="absolute top-[400px] left-[1196px] inline-block w-24 h-7">
  <p className="m-0">80</p>
</div>
<div className="absolute top-[393.5px] left-[262.5px] box-border w-[1866px] h-px border-t-[1px] border-solid border-silver" />
<div className="absolute top-[437.5px] left-[264.5px] box-border w-[1866px] h-px border-t-[1px] border-solid border-silver" />
<div className="absolute top-[466px] left-[169px] w-[2077px] h-[385px] text-left text-3xl text-black"> */
}
