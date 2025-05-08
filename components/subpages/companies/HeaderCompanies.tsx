import { useState } from "react";

import Form from "@/components/global/Form";
import Input from "@/components/global/Input";
import HeaderEntity from "@/components/global/HeaderEntity";

export default function HeaderCompanies(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [formData, setFormData] = useState({
    name: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateRequestBody = () => ({
    name: formData.name,
  });

  return(
    <HeaderEntity entityName="Companies" toggleModal={toggleModal}>
      <Form
        isOpen={isModalOpen}
        onClose={toggleModal}
        endpoint="/api/companies"
        modalName="Create Company"
        buttonName="Submit"
        onSubmitBody={generateRequestBody}
      >
        <Input 
          inputName="name" 
          inputType="text" 
          labelName="Company Name" 
          inputValue={formData.name} 
          onChange={handleInputChange}
        />
      </Form>
    </HeaderEntity>
  )
}