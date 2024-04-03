import React, { useEffect, useState } from "react";
import { Companies, Locations, Plants, Lines, Machines, Telemetries, Series } from "@/interfaces";
import Select from "react-select";


export default function Selects() {
  const [companies, setCompanies] = useState<Companies[]>([]);
  const [locations, setLocations] = useState<Locations[]>([]);
  const [plants, setPlants] = useState<Plants[]>([]);
  const [lines, setLines] = useState<Lines[]>([]);
  const [machines, setMachines] = useState<{ value: number; label: string }[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<any>([]);
  const [selectedLocations, setSelectedLocations] = useState<any>([]);
  const [selectedPlants, setSelectedPlants] = useState<any>([]);
  const [selectedLines, setSelectedLines] = useState<any>([]);
  const [selectedMachine, setSelectedMachine] = useState<number[]>([]);


  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/companies");
      const data = await response.json();
      setCompanies(data);
      setLocations([]);
    } catch (error) {
      console.error("Error fetching Companies:", error);
    }
  };

  const fetchLocations = async (companyId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/locations?company=${companyId}`);
      const data = await response.json();
      setLocations(data);
      setPlants([]);
    } catch (error) {
      console.error("Error fetching Pocations:", error);
    }
  };

  const fetchPlants = async (locationId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/plants?locations=${locationId}`);
      const data = await response.json();
      setPlants(data);
      setLines([]);
    } catch (error) {
      console.error("Error fetching Plants");
    }
  };

  const fetchLines = async (plantId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/lines?plants=${plantId}`);
      const data = await response.json();
      setLines(data);
      setMachines([]);
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
    setMachines([]);
    setSelectedMachine([]);
    fetchMachines(lineId);
  };

  const handleMachineChange = (selectedOption: any) => {
    console.log(selectedOption);
    setSelectedMachine(selectedOption);
    console.log("resultado  selected machine", selectedOption);
  };

  console.log("resultado machine", selectedMachine);

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
            <select className="w-32" id="locationSelect" onChange={handleLocationsChange} disabled={selectedCompany.length < 1}>
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
            <select className="w-32" id="plantSelect" onChange={handlePlantsChange} disabled={selectedLocations.length < 1}>
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
            <select className="w-32" id="lineSelect" onChange={handleLinesChange} disabled={selectedPlants.length < 1}>
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
            <Select className="w-[320px] h-8 ml-5" isDisabled={selectedLines.length < 1} id="machinesSelect" options={machines} onChange={handleMachineChange} value={selectedMachine} isMulti />
          </div>
        </div>
      </div>
    </div>
  );
}
