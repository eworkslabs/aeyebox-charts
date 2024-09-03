import { useState } from "react";
import Charts from "./Charts";
import ResultsKpi from "./ResultsKpi";
import TitleOverview from "./TitleOverview";
import Welcome from "./Welcome";
import Telemetries from "../apis/Telemetries";
import FiltersPopup from "./FilterPopup";
import { IoFilterSharp } from "react-icons/io5";

export default function Overview() {
  const [activeTab, setActiveTab] = useState("Machine");
  // const [selectedLine, setSelectedLine] = useState<number | undefined>(undefined);
  const [selectedMachines, setSelectedMachines] = useState<{ value: any; label: string }[]>([]);
  // const [selectedCompany, setSelectedCompany] = useState<number | undefined>(undefined);
  // const [selectedLocation, setSelectedLocation] = useState<number | undefined>(undefined);
  // const [selectedPlant, setSelectedPlant] = useState<number | undefined>(undefined);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isTelemetric, setIsTelemetric] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };



  const handlerMachine = (data01: any) => {
    const { selectedMachines: oo, ...data } = data01;
    console.log(oo);
    const pp: { value: any; label: string }[] = [];
    Object.entries(data).map(([k, v]) => {
      pp.push({ value: v, label: k });
    });
    // console.log('handleMachine: ',pp );
    console.log("teste ", selectedMachines.map((machine) => machine.value).join(","));
    setSelectedMachines(oo as any);
    setIsTelemetric(true)
    
  };

  return (
    <section>
      <div>
        <section className="flex items-center bg-[#07314a] border-[#07314a] rounded-t-3xl">
          <div className="p-5 ml-auto">
            <button onClick={togglePopup} className="bg-[#cfe600] border-[#cfe600] text-[#07314a] px-12 p-2 justify-center items-center rounded-xl flex">
              <IoFilterSharp className="text-xl" />
              <h1 className="text-lg lg:text-xl 2xl:text-xl pl-2">Filters</h1>
            </button>
          </div>
        </section>
      </div>
      <div className="bg-white">
        <TitleOverview />
        <FiltersPopup isOpen={isPopupOpen} onClose={togglePopup} handlerMachine={handlerMachine} />
        {isTelemetric && <Telemetries selectedMachines={selectedMachines} selectedDate={selectedDate} />}
      </div>
    </section>
  );
}
