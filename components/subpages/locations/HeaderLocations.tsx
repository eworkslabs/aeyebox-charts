import { useState } from "react";

import Form from "@/components/global/Form";
import Input from "@/components/global/Input";
import HeaderEntity from "@/components/global/HeaderEntity";

export default function HeaderCompanies(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [formData, setFormData] = useState({
    name: '',
    companyId: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateRequestBody = () => ({
    name: formData.name,
    companyId: formData.companyId
  });

  return(
    <HeaderEntity entityName="Locations" toggleModal={toggleModal}>
      <Form
        isOpen={isModalOpen}
        onClose={toggleModal}
        endpoint="/api/locations"
        modalName="Create Location"
        buttonName="Submit"
        onSubmitBody={generateRequestBody}
      >
        <Input 
          inputName="name" 
          inputType="text" 
          labelName="Location Name" 
          inputValue={formData.name} 
          onChange={handleInputChange}
        />
        <Input 
          inputName="company_id" 
          inputType="number" 
          labelName="Company ID" 
          inputValue={formData.companyId} 
          onChange={handleInputChange}
        />
      </Form>
    </HeaderEntity>
  )
}