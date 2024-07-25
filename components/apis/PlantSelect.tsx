"use client";
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
    <div>
      <select className="w-full border rounded p-2">
        <option value="">Select Plants</option>
        {plants.map((plant) => (
          <option key={plant.id} value={plant.id}>
            {plant.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlantSelect;
