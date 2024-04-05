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
      const response = await fetch(`http://localhost:3000/api/plants?locations=${locationId}`);
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
    <div className="ml-5">
      <label htmlFor="plantSelect">Plant:</label>
      <select className="w-32" id="plantSelect" onChange={handlePlantChange} disabled={!selectedLocation}>
        <option value="">Select...</option>
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


