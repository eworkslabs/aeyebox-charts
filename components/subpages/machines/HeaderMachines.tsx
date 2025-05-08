import { useState } from "react";
import Form from "@/components/global/Form";
import Input from "@/components/global/Input";
import HeaderEntity from "@/components/global/HeaderEntity";

export default function HeaderCompanies(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [formData, setFormData] = useState({
    name: '',
    lineId: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateRequestBody = () => ({
    name: formData.name,
    lineId: formData.lineId
  });

  return(
    <HeaderEntity entityName="Machines" toggleModal={toggleModal}>
      <Form
        isOpen={isModalOpen}
        onClose={toggleModal}
        endpoint="/api/machines"
        modalName="Create Machine"
        buttonName="Submit"
        onSubmitBody={generateRequestBody}
      >
        <Input 
          inputName="name" 
          inputType="text" 
          labelName="Machine Name" 
          inputValue={formData.name} 
          onChange={handleInputChange}
        />
        <Input 
          inputName="line_id" 
          inputType="number" 
          labelName="Line ID" 
          inputValue={formData.lineId} 
          onChange={handleInputChange}
        />
      </Form>
    </HeaderEntity>
  )
}