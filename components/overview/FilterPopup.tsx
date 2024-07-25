import React, { useState } from 'react';
import MachineSelect from '../apis/MachineSelect';
import CompanySelect from '../apis/CompanySelect';
import Locations from '@/pages/locations';
import LocationSelect from '../apis/LocationSelect';
import PlantSelect from '../apis/PlantSelect';
import LineSelect from '../apis/LineSelect';

interface RegisterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FiltersPopup: React.FC<RegisterPopupProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('Company');
  const [selectedLine, setSelectedLine] = useState<number | undefined>(undefined);
  const [selectedMachines, setSelectedMachines] = useState<{ value: number; label: string }[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<number | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<number | undefined>(undefined);
  const [selectedPlant, setSelectedPlant] = useState<number | undefined>(undefined);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Machine':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <CompanySelect onSelectCompany={setSelectedCompany} />
            </div>
            <div>
              <LocationSelect selectedCompany={selectedCompany} onSelectLocation={setSelectedLocation} />
            </div>
            <div>
              <PlantSelect selectedLocation={selectedLocation} onSelectPlant={setSelectedPlant} />
            </div>
            <div>
              <LineSelect selectedPlant={selectedPlant} onSelectLine={setSelectedLine} />
            </div>
            <div className="col-span-2">
              <MachineSelect selectedLines={[selectedLine || 0]} onSelectMachine={setSelectedMachines} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-5">
      <div className="bg-white rounded-lg p-6 w-[600px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-[#07314a]">Filter</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <div className="border-b mb-4 pb-2">
          <ul className="flex space-x-4">
            {['Machine'].map(tab => (
              <li
                key={tab}
                className={`cursor-pointer ${activeTab === tab ? 'text-[#07314a] border-b-2 border-[#07314a]' : 'text-'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        {renderTabContent()}
        <div className="flex justify-end mt-4">
          <button className="ease-in duration-300 bg-[#cfe600] text-[#07314a] py-2 px-10 rounded-xl">Save</button>
        </div>
      </div>
    </div>
  );
};

export default FiltersPopup;