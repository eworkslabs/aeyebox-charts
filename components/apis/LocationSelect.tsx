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
    <div className="w-[364.9px] relative h-9">
    <div className="absolute top-[0px] left-[90.9px] w-[274px] h-[35px]">
      <img className="absolute top-[12px] left-[249px] w-[11px] h-[11px] object-contain" alt="" src="/polygon-1.svg" />
    </div>
    <div className="absolute top-[1px] left-[89.9px] whitespace-pre-wrap inline-block w-[273px] h-[35px]">
      <select className="absolute top-[0px] left-[0px] bg-white w-[274px] h-[35px] border border-gray-300 rounded-md border-none" onChange={handleLocationChange} disabled={!selectedCompany}>
          <option value="">Select Your Location</option>
          {locations.map((location)=> (
            <option key={location.id} value={location.id}>{location.name}</option>
          ))}
      </select>
    </div>
    <div className="absolute top-[4px] left-[0px] text-darkslategray inline-block w-[98.1px]">Location:</div>
  </div>
  );
  //     <div className="w-[371px] relative h-9">
  //   <div className="absolute top-[0px] left-[97px] w-[274px] h-[35px]">
  //     <img className="absolute top-[12px] left-[249px] w-[11px] h-[11px] object-contain" alt="" src="/polygon-1.svg" />
  //   </div>
  //   <div className="absolute top-[1px] left-[97px] whitespace-pre-wrap inline-block w-[273px] h-[35px]">
  //     <select  className="absolute top-[0px] left-[0px] bg-white w-[274px] h-[35px]" onChange={handleCompanyChange}>
  //       <option>Select Your Company</option>
  //       {companies.map((company)=> (
  //         <option key={company.id} value={company.id}>{company.name}</option>
  //       ))}
  //     </select>
  //   </div>
  //   <div className="absolute top-[4px] left-[0px] text-darkslategray inline-block w-[98.1px]">Company:</div>
  // </div>
};

export default LocationSelect;
// <div className="ml-5">
//   <label htmlFor="locationSelect">Location:</label>
//   <select className="w-32" id="locationSelect" onChange={handleLocationChange} disabled={!selectedCompany}>
//     <option value="">Select...</option>
//     {locations.map((location) => (
//       <option key={location.id} value={location.id}>
//         {location.name}
//       </option>
//     ))}
//   </select>
// </div>


