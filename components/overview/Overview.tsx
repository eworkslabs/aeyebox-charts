import type { NextPage } from "next";
import React, { useState } from "react";
import CompanySelect from "@/components/apis/CompanySelect";
import LocationSelect from "@/components/apis/LocationSelect";
import PlantSelect from "@/components/apis/PlantSelect";
import LineSelect from "@/components/apis/LineSelect";
import MachineSelect from "@/components/apis/MachineSelect";
import DatePicker from "@/components/calendar/DatePicker";
import Telemetries from "@/components/apis/Telemetries";

const EdashExport: NextPage = () => {
  const [selectedCompany, setSelectedCompany] = useState<number | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<number | undefined>(undefined);
  const [selectedPlant, setSelectedPlant] = useState<number | undefined>(undefined);
  const [selectedLine, setSelectedLine] = useState<number | undefined>(undefined);
  const [selectedMachines, setSelectedMachines] = useState<{ value: number; label: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [machines, setMachines] = useState([]);
  const [companies, setCompanies] = useState<any[]>([]);


  return (
    <div className="bg-[#D9D9D9] flex-1 w-full relative h-[1649px] overflow-hidden text-center text-mid text-darkslategray font-murecho">
      <div className="  h-[213px] flex flex-col  items-start justify-start gap-[23px]   text-lg text-gray">

        <div className=" pl-8 pt-[45px] w-[1147px] relative h-9">
          <div className="bg-white w-[1147px] h-[35px] whitespace-pre-wrap inline-block text-left">{`    > type or say your prompt`}</div>
        </div>

        <div className=" pl-8 text-3xl font-medium text-black whitespace-pre-wrap text-left">
          → Overview
        </div>

        <div className="SelectLine1 flex flex-row gap-6 pl-8">
          <CompanySelect onSelectCompany={setSelectedCompany} />
          <LocationSelect selectedCompany={selectedCompany} onSelectLocation={setSelectedLocation} />
          <PlantSelect selectedLocation={selectedLocation} onSelectPlant={setSelectedPlant} />
        </div>

        <div className="SelectLine2 flex flex-row gap-4 pl-8">
          <LineSelect selectedPlant={selectedPlant} onSelectLine={setSelectedLine} />
          <MachineSelect selectedLines={[selectedLine || 0]} onSelectMachine={setSelectedMachines} />
        </div>

        <div className="Date flex flex-row gap-4 pl-8">
          <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
        <div className="w-full">
          <Telemetries selectedMachines={selectedMachines} />
        </div>
      </div>
    </div>
  );
};

export default EdashExport;
