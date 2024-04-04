import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props{
  selectedDate: any
}

export default function MyDatePicker({selectedDate, setSelectedDate}:any) {


  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MM/dd/yyyy"
      showTimeSelect={false} 
    />
  );
};
