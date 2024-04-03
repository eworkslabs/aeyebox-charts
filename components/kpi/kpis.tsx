import React, { useEffect, useState } from "react";
import { colorskpis } from "../optionsgraphic/Options";



export default function Kpis() {

const [selectedMachine, setSelectedMachine] = useState<number[]>([]);
const [kpis, setKpis] = useState<any[]>([]);

  useEffect(() => {
    const fetchTelementries = async function getData() {
      console.log("selectedMachine", selectedMachine);
      const data = await fetch(`http://localhost:3000/api/telemetries?machines=${selectedMachine.map((machine) => machine.value)}`).then((res) => res.json());

      const kpisData = data.map((item: any) => {
        return {
          name: item.name,
          data: item.kpis,
        };
      });
      setKpis(kpisData);
    };
    fetchTelementries();
  }, [selectedMachine]);

  const handleMachineChange = (selectedOption: any) => {
    console.log(selectedOption);
    setSelectedMachine(selectedOption);
    console.log("resultado  selected machine", selectedOption)
  };

  console.log("resultado machine", selectedMachine)


  return (
    <div className="flex flex-col space-y-6">
      {kpis.map((item, index) => (
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold mt-5 mx-5">{item.name}</h2>
          <div className="flex space-x-2 mt-5">
            <div className="flex flex-col justify-center p-4 w-[330px] rounded" style={{ backgroundColor: colorskpis[index] }}>
              <span className="text-left text-xl font-medium ">COUNT/S:</span>
              <span className="text-center text-2xl font-semibold ">{item.data.counts}</span>
            </div>

            <div className="flex flex-col justify-center p-4 w-[330px] rounded" style={{ backgroundColor: colorskpis[index] }}>
              <span className="text-left text-xl font-medium">LOW/S:</span>
              <span className="text-center text-2xl font-semibold">{item.data.lows}</span>

              <div className="flex flex-col justify-center p-4 w-[330px] rounded" style={{ backgroundColor: colorskpis[index] }}>
                <span className="text-left text-xl font-medium">HIGH/S:</span>
                <span className="text-center text-2xl font-semibold">{item.data.highs}</span>
              </div>

              <div className="flex flex-col justify-center p-4 w-[330px] rounded" style={{ backgroundColor: colorskpis[index] }}>
                <span className="text-left text-xl font-medium">STOP/S:</span>
                <span className="text-center text-2xl font-semibold">{item.data.stops}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
