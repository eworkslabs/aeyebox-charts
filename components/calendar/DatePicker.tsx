import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props{
  selectedDate: any
}

export default function MyDatePicker({selectedDate, setSelectedDate}:any) {


  const handleDateChange = (date: any) => {
    setSelectedDate(date)
  };

  return (
    
    <div className="w-[372px] relative h-9">
    <div className="absolute top-[0px] left-[98px] w-[274px] h-[35px]">
      <img className="absolute top-[12px] left-[249px] w-[11px] h-[11px]" alt="" src="/vector.svg" />
    </div>
    <div className="absolute top-[0px] left-[98px] whitespace-pre-wrap inline-block w-[273px] h-[35px]">
      <DatePicker className="left-[0px] bg-white w-[274px] h-[35px] font-murecho border border-gray-300 rounded-md border-none" selected={selectedDate} onChange={handleDateChange} dateFormat="dd.MM.yyyy" showTimeSelect={false} />
    </div>
    <div className="absolute top-[4px] left-[0px] text-darkslategray inline-block w-[98.1px]">Date:</div>
  </div>
  );
};

