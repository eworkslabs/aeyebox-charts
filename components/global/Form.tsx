import Modal from '@/components/global/Modal';
import React, { useState, ReactNode, FormEvent } from 'react';

interface FormProps {
  isOpen: boolean;
  onClose?: () => void;
  endpoint: string;
  modalName: string;
  buttonName: string;
  onSubmitBody: () => Record<string, any>;
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({ isOpen, onClose, endpoint, modalName, buttonName, onSubmitBody, children }) => {
  if (!isOpen) return null;

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setError('');
    setSuccess('');

    const body = onSubmitBody();

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Error when creating');
      }

      const data = await response.json();
      setSuccess(`Created successfully!`);
      setTimeout(() => location.reload(), 1000);
      
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    }
  };

  return (
    <Modal modalName={modalName} isOpen={true} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        {children}

        {error && <p style={{ color: 'red' }} className='text-sm'>{error}</p>}
        {success && <p style={{ color: 'green' }} className='text-sm'>{success}</p>}

        <div className="flex justify-end mt-20 md:mt-7">
          <button className="ease-in duration-300 bg-[#cfe600] text-[#07314a] py-2 px-10 rounded-xl" type="submit">
            {buttonName}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
