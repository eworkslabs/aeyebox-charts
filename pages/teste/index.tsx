import type { NextPage } from "next";
import React, { useState } from "react";
import CompanySelect from "@/components/apis/CompanySelect";
import LocationSelect from "@/components/apis/LocationSelect";
import PlantSelect from "@/components/apis/PlantSelect";
import LineSelect from "@/components/apis/LineSelect";
import MachineSelect from "@/components/apis/MachineSelect";
import DatePicker from "@/components/calendar/DatePicker";

const EdashExport: NextPage = () => {
  const [selectedCompany, setSelectedCompany] = useState<number | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<number | undefined>(undefined);
  const [selectedPlant, setSelectedPlant] = useState<number | undefined>(undefined);
  const [selectedLine, setSelectedLine] = useState<number | undefined>(undefined);
  const [selectedMachines, setSelectedMachines] = useState<{ value: number; label: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="w-full relative bg-white h-[1649px] overflow-hidden text-center text-mid text-darkslategray font-murecho">
      <div className="absolute top-[0px] left-[169px] bg-gainsboro w-[2077px] h-[1649px]" />
      <div className="absolute top-[41px] left-[263px] text-3xl font-medium text-black whitespace-pre-wrap text-left">→ Overview</div>
      <img className="absolute top-[38.3px] right-[42px] w-5 h-[26.3px]" alt="" src="/vector.svg" />
      <img className="absolute top-[39.5px] right-[85.5px] w-[25px] h-[26.3px]" alt="" src="/vector.svg" />
      <div className="absolute top-[315px] left-[265px] bg-silver w-[1865px] h-[35px]" />
      <div className="absolute top-[317px] left-[263px] text-lg inline-block w-24 h-7">
        <p className="m-0">KPIs</p>
      </div>
      <div className="absolute top-[317px] left-[558px] text-lg inline-block w-24 h-7">
        <p className="m-0">Count</p>
      </div>
      <div className="absolute top-[317px] left-[768px] inline-block w-24 h-7 text-lg">
        <p className="m-0">
          <span>Low</span>
          <span className="text-mid">/s</span>
        </p>
      </div>
      <div className="absolute top-[318px] left-[982px] text-lg inline-block w-24 h-7">
        <p className="m-0">High/s</p>
      </div>
      <div className="absolute top-[319px] left-[1196px] text-lg inline-block w-24 h-7">Stop</div>
      <div className="absolute top-[358px] left-[558px] inline-block w-24 h-7">10count</div>
      <div className="absolute top-[358px] left-[263px] inline-block w-24 h-7">S-01</div>
      <div className="absolute top-[400px] left-[264px] inline-block w-24 h-7">S-02</div>
      <div className="absolute top-[400px] left-[558px] inline-block w-24 h-7">20Stop</div>
      <div className="absolute top-[358px] left-[768px] inline-block w-24 h-7">20Low</div>
      <div className="absolute top-[400px] left-[768px] inline-block w-24 h-7">40Low</div>
      <div className="absolute top-[359px] left-[976px] inline-block w-24 h-7">
        <p className="m-0">30high</p>
      </div>
      <div className="absolute top-[400px] left-[976px] inline-block w-24 h-7">
        <p className="m-0">60high</p>
      </div>
      <div className="absolute top-[358px] left-[1196px] inline-block w-24 h-7">
        <p className="m-0">40count</p>
      </div>
      <div className="absolute top-[400px] left-[1196px] inline-block w-24 h-7">
        <p className="m-0">80count</p>
      </div>
      <div className="absolute top-[393.5px] left-[262.5px] box-border w-[1866px] h-px border-t-[1px] border-solid border-silver" />
      <div className="absolute top-[437.5px] left-[264.5px] box-border w-[1866px] h-px border-t-[1px] border-solid border-silver" />
      <div className="absolute top-[466px] left-[169px] w-[2077px] h-[385px] text-left text-3xl text-black">
        <div className="absolute top-[0px] left-[93px] font-medium whitespace-pre-wrap inline-block w-[89.1px]">→ Count</div>
        <div className="absolute top-[calc(50%_-_155.5px)] left-[0px] bg-indianred w-[2077px] h-[348px]" />
      </div>
      <div className="absolute top-[865px] left-[169px] w-[2077px] h-[385px] text-left text-3xl text-black">
        <div className="absolute top-[0px] left-[93px] font-medium inline-block w-[89.1px]">→ Speed</div>
        <div className="absolute h-[90.39%] top-[9.61%] bottom-[0%] left-[0px] bg-cornflowerblue w-[2077px]" />
      </div>
      <div className="absolute top-[1264px] left-[169px] w-[2077px] h-[385px] text-left text-3xl text-black">
        <div className="absolute top-[0px] left-[93px] font-medium whitespace-pre-wrap inline-block w-[89.1px]">→ Stops</div>
        <div className="absolute h-[90.39%] top-[9.61%] bottom-[0%] left-[0px] bg-lightgreen w-[2077px]" />
      </div>
      <div className="absolute top-[91px] left-[263px] w-[1147px] h-[213px] flex flex-row flex-wrap items-start justify-start gap-[23px] text-left text-lg text-gray">
        <div className="w-[1147px] relative h-9">
          <div className="absolute top-[0px] left-[0px] bg-white w-[1147px] h-[35px]" />
          <div className="absolute top-[1px] left-[0px] whitespace-pre-wrap inline-block w-[279px] h-[35px]">{`    > type or say your prompt`}</div>
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
