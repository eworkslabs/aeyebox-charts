"use client";
import React, { useEffect, useState } from "react";

interface LocationSelectProps {
  selectedCompany: number | undefined;
  onSelectLocation: (locationId: number) => void;
}

import LocationsData from "@/data/locations/4.json";

const LocationSelect: React.FC<LocationSelectProps> = ({ selectedCompany, onSelectLocation }) => {
  const [locations, setLocations] = useState<any[]>([]);

  useEffect(() => {
    if (selectedCompany) {
      fetchLocations(selectedCompany);
    }
  }, [selectedCompany]);

  const fetchLocations = async (companyId: number) => {
    try {
      const response = await fetch(`/api/locations?company_id=${companyId}`);
      const data = await response.json();
      // const data = LocationsData
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
    <div>
      <select className="w-full border rounded p-2" onChange={handleLocationChange}>
      <option value="">Select Locations</option>
      {locations.map((location)=> (
        <option key={location.id} value={location.id}>
          {location.name}
        </option>
      ))}
    </select>
  </div>
  );
};

export default LocationSelect;
