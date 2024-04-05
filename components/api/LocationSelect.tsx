import React, { useEffect, useState } from "react";

interface LocationSelectProps {
  selectedCompany: number | undefined;
  onSelectLocation: (locationId: number) => void;
}

const LocationSelect: React.FC<LocationSelectProps> = ({ selectedCompany, onSelectLocation }) => {
  const [locations, setLocations] = useState<any[]>([]);

  useEffect(() => {
    if (selectedCompany) {
      fetchLocations(selectedCompany);
    }
  }, [selectedCompany]);

  const fetchLocations = async (companyId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/locations?company=${companyId}`);
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.error("Error fetching Locations:", error);
    }
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const locationId = parseInt(event.target.value);
    onSelectLocation(locationId);
  };

  return (
    <div className="ml-5">
      <label htmlFor="locationSelect">Location:</label>
      <select className="w-32" id="locationSelect" onChange={handleLocationChange} disabled={!selectedCompany}>
        <option value="">Select...</option>
        {locations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelect;
