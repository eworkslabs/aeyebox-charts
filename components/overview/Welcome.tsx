import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { IoFilterSharp } from 'react-icons/io5';
import FiltersPopup from './FilterPopup';

export default function Welcome() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <section className="flex items-center bg-[#07314a] border-[#07314a] rounded-t-3xl">
        <div className="p-5 ml-auto">
          <button onClick={togglePopup} className="bg-[#cfe600] border-[#cfe600] text-[#07314a] p-2 justify-center items-center rounded-xl flex">
            <IoFilterSharp className="text-xl" />
            <h1 className="text-lg lg:text-xl 2xl:text-xl pl-2">Filters</h1>
          </button>
        </div>
      </section>
      <FiltersPopup isOpen={isPopupOpen} onClose={togglePopup} />
    </>
  );
}










//Register and welcome

 {/* <h1 className="text-white text-base lg:text-[19px] 2xl:text-2xl font-light">Welcome,</h1>
          <h1 className="text-white text-base lg:text-[19px]  2xl:text-2xl md:pl-2">(Nome do Usuário)</h1> */}
          // </div>
          {/* <div className="border border-white rounded-r-lg rounded-full justify-center items-center p-2 w-[110px] sm:w-[120px] lg:w-[220px] flex">
            <button className="text-white text-lg lg:text-xl 2xl:text-xl" onClick={togglePopup}>Register</button>
          </div>
          <div className="border border-white rounded-l-lg border-l-transparent rounded-full justify-center items-center">
            <button onClick={togglePopup}>
              <BiChevronDown className="text-[38px] text-white pt-2" />
            </button>
          </div> */}