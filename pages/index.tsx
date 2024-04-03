import { render } from "react-dom";
import styles from "/styles/Home.module.css";
import dynamic from "next/dynamic";
import DatePicker from "@/components/calendar/DatePicker";
import React, { useEffect, useState } from "react";
import { Companies, Locations, Plants, Lines, Machines, Telemetries, Series } from "@/interfaces";
import Select from "react-select";
import Kpis from "@/components/kpi/kpis";



const colorskpis = ["#c5e0f4", "#b7e1a1", "#ffd452", "#44403c", "#581c87", "#94a3b8"];

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface HomePageProps { }

export default function Home() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMachine, setSelectedMachine] = useState<number[]>([]);


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
  const [kpis, setKpis] = useState<any[]>([]);

  
  useEffect(() => {
    const fetchTelementries = async function getData() {
      console.log('selectedMachine', selectedMachine);
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

      const kpisData = data.map((item: any) => {
        return {
          name: item.name,
          data: item.kpis,
        };
      });
      setKpis(kpisData);
    };
    fetchTelementries()
  }, [selectedMachine]);

  const xaxis = {
    categories: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
  };



  const countOptions = {
    colors: colorskpis,
    tooltip: {
      enabled: true,
    },
    chart: {
      foreColor: "dark",
    },
    subtitle: {
      text: "Counts",
      offsetY: 0,
      offsetX: 8,
    },
    markes: {
      size: 4,
      strokWidth: 2,
      strokeColor: "#ffda",
    },
    grid: {
      show: true,
    },
    xaxis,
  };


  const speedOptions = {
    subtitle: {
      text: "Speed",
      offsetY: 0,
      offsetX: 8,
    },
    xaxis,
    colors: colorskpis,
  };


  const stopsOptions = {
    subtitle: {
      text: "Stops",
      offsetY: 0,
      offsetX: 8,
    },
    xaxis,
    colors: colorskpis,
    chart: {
      stacked: true,
    },
  };



  const ProductionLineData = {
    title: "",
    productionLine: "W3 - Prod69 - L7",
    series3: "Filler",
    series4: "Labelizer",
    xPerMinute: 31,
    date: "Thursday, 31 Aug 2023",
    counts: {
      counts: 60,
      low: 11 * 60,
      high: 16 * 60,
    },
    lost: 6,
    stops: 45,
  };

  const [companies, setCompanies] = useState<Companies[]>([]);
  const [locations, setLocations] = useState<Locations[]>([]);
  const [plants, setPlants] = useState<Plants[]>([]);
  const [lines, setLines] = useState<Lines[]>([]);
  const [machines, setMachines] = useState<{ value: number; label: string }[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<any>([]);
  const [selectedLocations, setSelectedLocations] = useState<any>([]);
  const [selectedPlants, setSelectedPlants] = useState<any>([]);
  const [selectedLines, setSelectedLines] = useState<any>([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/companies");
      const data = await response.json();
      setCompanies(data);
      setLocations([])
    } catch (error) {
      console.error("Error fetching Companies:", error);
    }
  };

  const fetchLocations = async (companyId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/locations?company=${companyId}`);
      const data = await response.json();
      setLocations(data);
      setPlants([])
    } catch (error) {
      console.error("Error fetching Pocations:", error);
    }
  };

  const fetchPlants = async (locationId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/plants?locations=${locationId}`);
      const data = await response.json();
      setPlants(data);
      setLines([])
    } catch (error) {
      console.error("Error fetching Plants");
    }
  };

  const fetchLines = async (plantId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/lines?plants=${plantId}`);
      const data = await response.json();
      setLines(data);
      setMachines([])
    } catch (error) {
      console.error("Error fetching Lines");
    }
  };

  const fetchMachines = async (lineId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/machines?lines=${lineId}`);
      const data: Machines[] = await response.json();
      const machineOptions = data.map((machine) => ({
        value: machine.id,
        label: machine.name,
      }));
      setMachines(machineOptions);
    } catch (error) {
      console.error("Erro fetching Machines");
    }
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const companyId = parseInt(event.target.value);
    setSelectedCompany(companyId);
    fetchLocations(companyId);
  };

  const handleLocationsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const locationId = parseInt(event.target.value);
    setSelectedLocations(locationId);
    fetchPlants(locationId);
  };

  const handlePlantsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const plantId = parseInt(event.target.value);
    setSelectedPlants(plantId);
    fetchLines(plantId);
  };

  const handleLinesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lineId = parseInt(event.target.value);
    setSelectedLines(lineId);
    setMachines([])
    setSelectedMachine([])
    fetchMachines(lineId);
  };

  const handleMachineChange = (selectedOption: any) => {
    console.log(selectedOption);
    setSelectedMachine(selectedOption);
    console.log("resultado  selected machine", selectedOption)
  };

  console.log("resultado machine", selectedMachine)


  return (
    <div>
      <div className="mt-5 mx-5">

        <div>
          <div className="flex items-center mt-2">
            <label htmlFor="companySelect">Select Company:</label>
            <select className="w-32" id="companySelect" onChange={handleCompanyChange}>
              <option value="">Select...</option>
              {companies.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>

            <label className="ml-5" htmlFor="locationSelect">
              Select Location:
            </label>
            <select className="w-32" id="locationSelect" onChange={handleLocationsChange} disabled={selectedCompany.length <1 }>
              <option value="">Select...</option>
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>

            <label className="ml-5 " htmlFor="plantsSelect">
              Select Plant:
            </label>
            <select className="w-32" id="plantSelect" onChange={handlePlantsChange} disabled={selectedLocations.length <1 }>
              <option value="">Select...</option>
              {plants.map((plant) => (
                <option key={plant.id} value={plant.id}>
                  {plant.name}
                </option>
              ))}
            </select>

            <label className="ml-5" htmlFor="linesSelect">
              Select Lines:
            </label>
            <select className="w-32" id="lineSelect" onChange={handleLinesChange} disabled={selectedPlants.length <1}>
              <option value="">Select...</option>
              {lines.map((line) => (
                <option key={line.id} value={line.id}>
                  {line.name}
                </option>
              ))}
            </select>

            <label className="ml-5" htmlFor="machinesSelect">
              Select Machines:
            </label>
            <Select className="w-[320px] h-8 ml-5" isDisabled={selectedLines.length <1} id="machinesSelect" options={machines} onChange={handleMachineChange} value={selectedMachine} isMulti />
          </div>
        </div>

      </div>
      <div>
        <div className="flex flex-col space-y-6">
          {kpis.map((item, index) => (
            <div className="flex items-center space-x-4">
              <h2 className="text-lg font-semibold mt-5 mx-5">{item.name}</h2>
              <div className="flex space-x-2 mt-5">
                <div className="flex flex-col justify-center p-4 w-[330px] rounded" style={{ backgroundColor: colorskpis[index] }}>
                  <span className="text-left text-xl font-medium ">COUNT/S:</span>
                  <span className="text-center text-2xl font-semibold ">{item.data.counts}</span>
                </div>
                <div className="flex flex-col justify-center p-4 w-[330px] rounded" style={{ backgroundColor: colorskpis[index] }}>
                  <span className="text-left text-xl font-medium">LOW/S:</span>
                  <span className="text-center text-2xl font-semibold">{item.data.lows}</span>
                </div>
                <div className="flex flex-col justify-center p-4 w-[330px] rounded" style={{ backgroundColor: colorskpis[index] }}>
                  <span className="text-left text-xl font-medium">HIGH/S:</span>
                  <span className="text-center text-2xl font-semibold">{item.data.highs}</span>
                </div>
                <div className="flex flex-col justify-center p-4 w-[330px] rounded" style={{ backgroundColor: colorskpis[index] }}>
                  <span className="text-left text-xl font-medium">STOP/S:</span>
                  <span className="text-center text-2xl font-semibold">{item.data.stops}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="Calendar p-4 ">
            <DatePicker />
          </div>
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
      </div>
    </div>
  );
}
