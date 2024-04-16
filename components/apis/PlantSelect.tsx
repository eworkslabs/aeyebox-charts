import React, { useEffect, useState } from "react";

interface PlantSelectProps {
  selectedLocation: number | undefined;
  onSelectPlant: (plantId: number) => void;
}

const PlantSelect: React.FC<PlantSelectProps> = ({ selectedLocation, onSelectPlant }) => {
  const [plants, setPlants] = useState<any[]>([]);

  useEffect(() => {
    if (selectedLocation) {
      fetchPlants(selectedLocation);
    }
  }, [selectedLocation]);

  const fetchPlants = async (locationId: number) => {
    try {
      const response = await fetch(`/api/plants?location_id=${locationId}`);
      const data = await response.json();
      setPlants(data);
    } catch (error) {
      console.error("Error fetching Plants:", error);
    }
  };

  const handlePlantChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const plantId = parseInt(event.target.value);
    onSelectPlant(plantId);
  };

  return (
    <div className="w-[364.9px] relative h-9 flex items-center">
      <div className="left-[5px] text-darkslategray inline-block w-[98.1px]">Plant:</div>
      <div className=" left-[90.9px] w-[274px] h-[35px]">
        <img className=" left-[249px] w-[11px] h-[11px] object-contain" alt="" src="/polygon-1.svg" />
      </div>
      <div className=" left-[89.9px] whitespace-pre-wrap inline-block w-[273px] h-[35px]">
        <select className=" left-[0px] bg-white w-[274px] h-[35px] border border-gray-300 rounded-md border-none" onChange={handlePlantChange} disabled={!selectedLocation}>
          <option value="">Select Your Plant</option>
          {plants.map((plant) => (
            <option key={plant.id} value={plant.id}>
              {plant.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PlantSelect;
