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


  return (
    <div className="w-full relative bg-white h-[1649px] overflow-hidden text-center text-mid text-darkslategray font-murecho">
      <div className="absolute top-[0px] left-[169px] bg-gainsboro w-[2077px] h-[1649px]" />
      <div className="absolute top-[41px] left-[263px] text-3xl font-medium text-black whitespace-pre-wrap text-left">→ Overview</div>
      <img className="absolute top-[38.3px] right-[42px] w-5 h-[26.3px]" alt="" src="/vector.svg" />
      <img className="absolute top-[39.5px] right-[85.5px] w-[25px] h-[26.3px]" alt="" src="/vector.svg" />
      <div className="absolute top-[315px] left-[265px] bg-silver w-[1865px] h-[35px]" />
      <Telemetries selectedMachines={selectedMachines} />
      <div className="absolute top-[91px] left-[263px] w-[1147px] h-[213px] flex flex-row flex-wrap items-start justify-start gap-[23px] text-left text-lg text-gray">
        <div className="w-[1147px] relative h-9">
          <div className="absolute top-[0px] left-[0px] bg-white w-[1147px] h-[35px]" />
          <div className="absolute top-[1px] left-[0px] whitespace-pre-wrap inline-block w-[279px] h-[35px]">{`    > type or say your prompt`}</div>
          <img className="absolute top-[10px] left-[1121px] w-[13px] h-3.5" alt="" src="/vector.svg" />
          <img className="absolute top-[10px] left-[1085px] w-3.5 h-3.5" alt="" src="/vector.svg" />
        </div>
        <div className="Company">
          <CompanySelect onSelectCompany={setSelectedCompany} />
        </div>

        <div className="Location">
          <LocationSelect selectedCompany={selectedCompany} onSelectLocation={setSelectedLocation} />
        </div>
        
        <div className="Plant">
          <PlantSelect selectedLocation={selectedLocation} onSelectPlant={setSelectedPlant} />
        </div>

        <div className="Line">
        <LineSelect selectedPlant={selectedPlant} onSelectLine={setSelectedLine} />
        </div>

        <div className="Machine">
          <MachineSelect selectedLines={[selectedLine || 0]} onSelectMachines={setSelectedMachines} />
        </div>

        <div className="Date">
          <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
      </div>
    </div>
  );
};

export default EdashExport;
