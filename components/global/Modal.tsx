import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  modalName: string;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({ isOpen, onClose, modalName, children }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-5">
      <div className="bg-white rounded-lg p-6 w-[600px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-[#07314a]">{modalName}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="border-b mb-4 pb-2">
          <ul className="flex space-x-4"></ul>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;