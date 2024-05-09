import type { NextPage } from "next";
import React, { useState, FormEvent } from "react";
import CompanySelect from "../apis/CompanySelect";

async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const response = await fetch("/api/companies", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
}

async function onPut(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const response = await fetch("/api/locations/1", {
    method: "PUT",
    body: formData,
  });
  const data = await response.json();
}

const FormCompanies: NextPage = () => {
  const [selectedCompany, setSelectedCompany] = useState<number | undefined>(undefined);
  return (
    <div className="bg-[#D9D9D9] flex-1 w-full relative h-[1649px] overflow-hidden text-center text-mid text-darkslategray font-murecho">
      <h1>COMPANIES</h1>
      <div className="  h-[213px] flex flex-col  items-start justify-start gap-[23px]   text-lg text-gray">
        <div>
          <table className="w-full table-fixed">
            <thead className="bg-[#2F2F2F]  text-slate-50 ">
              <tr>
                <th>Companies</th>
                <th>Create Companies</th>
                <th>Edit Companies</th>
                <th>Delete Companies</th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr className="bg-silver">
                <td>Eworks Labs</td>
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
    </div>
  );
};

export default FormCompanies;
