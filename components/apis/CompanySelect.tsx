"use client";
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
      const response = await fetch(`/api/companies`);
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
    <div>
      <select className="w-full border rounded p-2" onChange={handleCompanyChange}>
        <option value="">Select Company</option>
        {companies.map((company)=> (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CompanySelect;
