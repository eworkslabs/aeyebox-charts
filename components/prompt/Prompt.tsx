import React from "react";

const Prompt: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Prompt Title</h2>
        <p className="text-gray-700 mb-6">Prompt description goes here.</p>
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2">
            Confirm
          </button>
          <button className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
