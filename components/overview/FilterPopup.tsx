import React, { useState } from 'react';

interface RegisterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FiltersPopup: React.FC<RegisterPopupProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('Company');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Machine':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <select className="w-full border rounded p-2">
                <option value="">Select Company</option>
                <option value="Company1">Company 1</option>
                <option value="Company2">Company 2</option>
              </select>
            </div>
            <div>
              <select className="w-full border rounded p-2">
                <option value="">Select Locations</option>
                <option value="Company1">Location 1</option>
                <option value="Company2">Location 2</option>
              </select>
            </div>
            <div>
              <select className="w-full border rounded p-2">
                <option value="">Select Plants</option>
                <option value="Company1">Plant 1</option>
                <option value="Company2">Plant 2</option>
              </select>
            </div>
            <div>
            <select className="w-full border rounded p-2">
                <option value="">Select Lines</option>
                <option value="Company1">Line 1</option>
                <option value="Company2">Line 2</option>
              </select>
            </div>
            <div className="col-span-2">
              <input type="text" placeholder='Machine Name' className="w-full border rounded p-2" />
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