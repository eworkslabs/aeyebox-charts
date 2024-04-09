import React, { useEffect, useState } from "react";
import Select from "react-select";

interface Machine {
  id: number;
  name: string;
}

interface MachineSelectProps {
  selectedLines: number[];
  onSelectMachine: (selectedOption: any) => void;
}

const MachineSelect: React.FC<MachineSelectProps> = ({ selectedLines, onSelectMachine }) => {
  const [machines, setMachines] = useState<{ value: number; label: string }[]>([]);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        if (selectedLines.length > 0) {
          const lineIds = selectedLines.join(",");
          const response = await fetch(`http://localhost:3000/api/machines?lines=${lineIds}`);
          const data: Machine[] = await response.json();
          const machineOptions = data.map((machine) => ({
            value: machine.id,
            label: machine.name,
          }));
          setMachines(machineOptions);
        } else {

          setMachines([]);
          onSelectMachine([]);
        }
      } catch (error) {
        console.error("Error fetching machines:", error);
      }
    };

    fetchMachines();
  }, [selectedLines, onSelectMachine]);

  return (
    <div className="w-[765px] h-9 flex text-darkslategray">
      <div className=" left-[0px] inline-block w-[98.1px]">Machines:</div>
      <Select className="  text-gray whitespace-pre-wrap w-[720px] h-[35px]" isDisabled={selectedLines.length < 1} options={machines} onChange={onSelectMachine} isMulti />
    </div>
  );
};

export default MachineSelect;


