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
      const response = await fetch("http://localhost:3000/api/companies");
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
      <label htmlFor="companySelect">Company:</label>
      <select className="w-32" id="companySelect" onChange={handleCompanyChange}>
        <option value="">Select...</option>
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CompanySelect;
