"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import MachineData from "@/data/machines/1111.json"

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
          const response = await fetch(`/api/machines?line_id=${lineIds}`);
          const data: Machine[] = await response.json();
          // const data = MachineData
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
    <div className="h-7 flex text-darkslategray">
      <div className=" mt-1 inline-block w-[98.1px]">Machines:</div>
      <Select className=" text-left ml-2 text-gray whitespace-pre-wrap w-[720px] h-[34px]" isDisabled={selectedLines.length < 1} options={machines} onChange={onSelectMachine} isMulti  instanceId={"selSelect1"} />
    </div>
  );
};

export default MachineSelect;
