import React, { useEffect, useState } from "react";

interface CompanySelectProps {
  onSelectCompany: (companyId: number) => void;
}

const CompanySelect: React.FC<CompanySelectProps> = ({ onSelectCompany }) => {
  const [companies, setCompanies] = useState<any[]>([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch(`/api/companies/custom`);
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error("Error fetching Companies:", error);
    }
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const companyId = parseInt(event.target.value);
    onSelectCompany(companyId);
  };

  return (

    <div className="w-[371px] relative h-9 flex items-center">
      <div className=" left-[0px] text-darkslategray inline-block w-[98.1px]">Company:</div>
      <div className=" left-[97px] w-[274px] h-[35px]">
        <img className=" left-[249px] w-[11px] h-[11px] object-contain" alt="" src="/polygon-1.svg" />
      </div>
      <div className=" left-[97px] whitespace-pre-wrap inline-block w-[273px] h-[35px]">
        <select className="left-[0px] bg-white w-[274px] h-[35px] border border-gray-300 rounded-md border-none" onChange={handleCompanyChange}>
          <option>Select Your Company</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>{company.name}</option>
          ))}
        </select>
      </div>
    </div>

  );
};

export default CompanySelect;


