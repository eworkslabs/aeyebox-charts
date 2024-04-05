import React, { useState } from "react";
import CompanySelect from "@/components/api/CompanySelect";
import LocationSelect from "@/components/api/LocationSelect";
import PlantSelect from "@/components/api/PlantSelect";
import LineSelect from "@/components/api/LineSelect";
import DatePicker from "@/pages/DatePicker";

const Home: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<number | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<number | undefined>(undefined);
  const [selectedPlant, setSelectedPlant] = useState<number | undefined>(undefined);
  const [selectedLine, setSelectedLine] = useState<number | undefined>(undefined);
  const [selectedMachine, setSelectedMachine] = useState<{ value: number; label: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());


  return (
    <div>
      <div className="mt-5 mx-5">
        <div>
          <div className="flex items-center mt-2">
            <CompanySelect onSelectCompany={setSelectedCompany} />
            <LocationSelect selectedCompany={selectedCompany} onSelectLocation={setSelectedLocation} />
            <PlantSelect selectedLocation={selectedLocation} onSelectPlant={setSelectedPlant} />
            <LineSelect selectedPlant={selectedPlant} onSelectLine={setSelectedLine} />
            <div></div>
          </div>
          <div className="Calendar">
            <label className="pr-4 ml-[3px]" htmlFor="Calendar">
              Date:
            </label>
            <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
