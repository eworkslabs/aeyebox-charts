import { useState } from "react";
import Form from "@/components/global/Form";
import Input from "@/components/global/Input";
import HeaderEntity from "@/components/global/HeaderEntity";

export default function HeaderCompanies(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [formData, setFormData] = useState({
    name: '',
    locationId: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateRequestBody = () => ({
    name: formData.name,
    locationId: formData.locationId
  });

  return(
    <HeaderEntity entityName="Plants" toggleModal={toggleModal}>
      <Form
        isOpen={isModalOpen}
        onClose={toggleModal}
        endpoint="/api/plants"
        modalName="Create Plant"
        buttonName="Submit"
        onSubmitBody={generateRequestBody}
      >
        <Input 
          inputName="name" 
          inputType="text" 
          labelName="Plant Name" 
          inputValue={formData.name} 
          onChange={handleInputChange}
        />
        <Input 
          inputName="location_id" 
          inputType="number" 
          labelName="Location ID" 
          inputValue={formData.locationId} 
          onChange={handleInputChange}
        />
      </Form>
    </HeaderEntity>
  )
}