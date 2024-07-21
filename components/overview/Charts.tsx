"use client";
import React, {useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { countOptions, speedOptions, stopsOptions } from "../optionsgraphic/Options";


const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Charts: React.FC<{ selectedMachines: { value: number; label: string }[]; selectedDate: any }> = ({ selectedMachines, selectedDate }) => {
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

        // Eu criei 3 variaveis de opcoes para o componente de grafico;
        // Para receber os dados da API fazendo um merge com as colores
        
        const colors = data.map((item: any) => item.color);
        setNCountOptions({ ...countOptions, ...{ colors } });
        setNStopOptions({ ...stopsOptions, ...{ colors } });
        setNSpeedOptions({ ...speedOptions, ...{ colors } });

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
      <div className="w-full mt-10">
        <h1 className="p-5 text-[#292929] text-[24px] font-semibold">Counts</h1>
        <Chart options={nCountOptions} series={countsSeries} type="line" height={350} />
        <h1 className="p-5 text-[#292929] text-[24px] font-semibold">Speed</h1>
        <Chart options={nSpeedOptions} series={speedsSeries} type="area" height={350} />
        <h1 className="p-5 text-[#292929] text-[24px] font-semibold">Stops</h1>
        <Chart options={nStopsOptions} series={stopsSeries} type="bar" height={350} />
      </div>
    </div>
  );
};

export default Charts;

