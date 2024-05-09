import type { NextPage } from "next";
import React, { useState, FormEvent } from "react";
import CompanySelect from "../apis/CompanySelect";
import LocationSelect from "../apis/LocationSelect";

async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const response = await fetch("/api/plants", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
}

async function onPut(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const response = await fetch("/api/plants/1", {
    method: "PUT",
    body: formData,
  });
  const data = await response.json();
}

const FormLocations: NextPage = () => {
  const [selectedCompany, setSelectedCompany] = useState<number | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<number | undefined>(undefined);

  return (
    <div className="bg-[#D9D9D9] flex-1 w-full relative h-[1649px] overflow-hidden text-center text-mid text-darkslategray font-murecho">
      <h1>LOCATIONS</h1>
      <div className="  h-[213px] flex flex-col  items-start justify-start gap-[23px]   text-lg text-gray">
        <table className="w-full table-fixed">
          <thead className="bg-[#2F2F2F]  text-slate-50 ">
            <tr>
              <th>Companies</th>
              <th>Locations</th>
              <th>Create Locations</th>
              <th>Edit Locations</th>
              <th>Delete Locations</th>
            </tr>
          </thead>
          <tbody className="text-black">
            <tr className="bg-silver">
              <td>Eworks Labs</td>
              <td>München</td>
              <td>
                <input type="text" name="name" />
                <button>Save</button>
              </td>
              <td>
                <input type="text" name="name" />
                <button>Save</button>
              </td>
              <td>
                <input type="text" name="name" />
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormLocations;
