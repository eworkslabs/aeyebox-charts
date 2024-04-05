import React, { useState } from "react";
import CompanySelect from "@/components/api/CompanySelect";
import LocationSelect from "@/components/api/LocationSelect";
import PlantSelect from "@/components/api/PlantSelect";
import LineSelect from "@/components/api/LineSelect";
import MachineSelect from "@/components/api/MachineSelect";
import KpiChart from "@/components/api/KpiChart";

const Home: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<number | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<number | undefined>(undefined);
  const [selectedPlant, setSelectedPlant] = useState<number | undefined>(undefined);
  const [selectedLine, setSelectedLine] = useState<number | undefined>(undefined);
  const [selectedMachines, setSelectedMachines] = useState<{ value: number; label: string }[]>([]);

  return (
    <div>
      <div className="mt-5 mx-5">
        <div>
          <div className="flex items-center mt-2">
            <CompanySelect onSelectCompany={setSelectedCompany} />
            <LocationSelect selectedCompany={selectedCompany} onSelectLocation={setSelectedLocation} />
            <PlantSelect selectedLocation={selectedLocation} onSelectPlant={setSelectedPlant} />
            <LineSelect selectedPlant={selectedPlant} onSelectLine={setSelectedLine} />
            <MachineSelect selectedLines={[selectedLine || 0]} onSelectMachines={setSelectedMachines} />

          </div>
        </div>
      </div>
      <KpiChart selectedMachines={selectedMachines} />
    </div>
  );
};

export default Home;
