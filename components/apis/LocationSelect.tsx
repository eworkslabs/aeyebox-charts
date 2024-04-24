"use client";
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
      const response = await fetch(`/api/locations?company_id=${companyId}`);
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
    <div className="w-[364.9px] relative h-9 flex items-center">
      <div className=" left-[0px] text-darkslategray inline-block w-[98.1px]">Location:</div>
      <div className=" left-[90.9px] w-[274px] h-[35px]">
      </div>
      <div className=" left-[89.9px] whitespace-pre-wrap inline-block w-[273px] h-[35px]">
        <select className=" left-[0px] bg-white w-[274px] h-[35px] border border-gray-300 rounded-md border-none" onChange={handleLocationChange} disabled={!selectedCompany}>
          <option value="">Select Your Location</option>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationSelect;
