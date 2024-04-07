import React, { useEffect, useState } from "react";

interface LineSelectProps {
  selectedPlant: number | undefined;
  onSelectLine: (lineId: number) => void;
}

const LineSelect: React.FC<LineSelectProps> = ({ selectedPlant, onSelectLine }) => {
  const [lines, setLines] = useState<any[]>([]);

  useEffect(() => {
    if (selectedPlant) {
      fetchLines(selectedPlant);
    }
  }, [selectedPlant]);

  const fetchLines = async (plantId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/lines?plants=${plantId}`);
      const data = await response.json();
      setLines(data);
    } catch (error) {
      console.error("Error fetching Lines:", error);
    }
  };

  const handleLineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lineId = parseInt(event.target.value);
    onSelectLine(lineId);
  };

  return (
    <div className="w-[372px] relative h-9">
      <div className="absolute top-[0px] left-[98px] w-[274px] h-[35px]">
        <img className="absolute top-[12px] left-[249px] w-[11px] h-[11px] object-contain" alt="" src="/polygon-1.svg" />
      </div>
      <div className="absolute top-[1px] left-[98px] whitespace-pre-wrap inline-block w-[273px] h-[35px]">
        <select className="absolute top-[0px] left-[0px] bg-white w-[274px] h-[35px] border border-gray-300 rounded-md border-none" onChange={handleLineChange} disabled={!selectedPlant} >
          <option value="">Select Your Line</option>
          {lines.map((line)=> (
            <option key={line.id} value={line.id}>{line.name}</option>
          ))}
        </select>
      </div>
      <div className="absolute top-[4px] left-[0px] text-darkslategray inline-block w-[98.1px]">Line:</div>
    </div>
  );
};

export default LineSelect;
