import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  selectedDate: any
}

export default function MyDatePicker({ selectedDate, setSelectedDate }: any) {


  const handleDateChange = (date: any) => {
    setSelectedDate(selectedDate.toISOString().split('T')[0])
    console.log(selectedDate, "MyDatePicker");
    console.log(selectedDate.toISOString().split('T')[0]);
  };

  return (
    <div className="w-[372px] flex flex-row h-9">
      <div className=" text-darkslategray  w-[98.1px]">Date:</div>
      <div className=" left-[98px] w-[274px] h-[35px]">
        <img className=" left-[249px] w-[11px] h-[11px] object-contain" alt="" src="/polygon-1.svg" />
      </div>
      <div className="  w-[273px] h-[35px]">
        <DatePicker className=" bg-white w-[274px] h-[35px] font-murecho border border-gray-300 rounded-md border-none" selected={selectedDate} onChange={handleDateChange}  dateFormat="dd.MM.yyyy" showTimeSelect={false} />
      </div>
    </div>

  );
};

