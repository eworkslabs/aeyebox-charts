import { useState } from "react";

import Form from "@/components/global/Form";
import Input from "@/components/global/Input";
import HeaderEntity from "@/components/global/HeaderEntity";

export default function HeaderCompanies(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [formData, setFormData] = useState({
    name: '',
    plantId: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateRequestBody = () => ({
    name: formData.name,
    plantId: formData.plantId
  });

  return(
    <HeaderEntity entityName="Lines" toggleModal={toggleModal}>
      <Form
        isOpen={isModalOpen}
        onClose={toggleModal}
        endpoint="/api/lines"
        modalName="Create Line"
        buttonName="Submit"
        onSubmitBody={generateRequestBody}
      >
        <Input 
          inputName="name" 
          inputType="text" 
          labelName="Line Name" 
          inputValue={formData.name} 
          onChange={handleInputChange}
        />
        <Input 
          inputName="plant_id" 
          inputType="number" 
          labelName="Plant ID" 
          inputValue={formData.plantId} 
          onChange={handleInputChange}
        />
      </Form>
    </HeaderEntity>
  )
}