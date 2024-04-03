import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { countOptions, speedOptions, stopsOptions } from '@/components/optionsgraphic/Options';


const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Graphic() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMachine, setSelectedMachine] = useState<number[]>([]);
  const [kpis, setKpis] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/series")
      .then((response) => response.json())
      .then((data) => {
        setSeries(data);
        console.log("fetched series", series);
      });
  }, []);

  useEffect(() => {
    if (series.length) {
      console.log("loaded TRUE", series);
      setLoading(false);
    }
  }, [series]);

  const [countsSeries, setCountSeries] = useState<any[]>([]);
  const [speedsSeries, setSpeedSeries] = useState<any[]>([]);
  const [stopsSeries, setStopSeries] = useState<any[]>([]);

  useEffect(() => {
    const fetchTelementries = async function getData() {
      console.log("selectedMachine", selectedMachine);
      const data = await fetch(`http://localhost:3000/api/telemetries?machines=${selectedMachine.map((machine) => machine.value)}`).then((res) => res.json());

      const counts = data.map((item: any) => {
        return {
          name: item.name,
          data: item.series.count,
        };
      });

      setCountSeries(counts);

      const speeds = data.map((item: any) => {
        return {
          name: item.name,
          data: item.series.speed,
        };
      });

      setSpeedSeries(speeds);

      const stops = data.map((item: any) => {
        return {
          name: item.name,
          data: item.series.stops,
        };
      });

      setStopSeries(stops);
    };
    fetchTelementries();
  }, [selectedMachine]);



  

  return (
    <div>
      <div className="Charts">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <Chart options={countOptions} series={countsSeries} type="line" height={350} width={1500} />
            <Chart options={speedOptions} series={speedsSeries} type="area" height={350} width={1500} />
            <Chart options={stopsOptions} series={stopsSeries} type="bar" height={350} width={1500} />
          </>
        )}
      </div>
    </div>
  );
}
