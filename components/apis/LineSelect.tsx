"use client";
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
      const response = await fetch(`/api/lines?plant_id=${plantId}`);
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
    <div>
      <select className="w-full border rounded p-2">
        <option value="">Select Lines</option>
        {lines.map((line) => (
          <option key={line.id} value={line.id}>
            {line.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LineSelect;