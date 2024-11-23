interface InputProps {
  inputName: string;
  inputType: string;
  labelName: string;
  inputValue?: any;
  onChange?: any;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ inputName, inputType, labelName, onChange, required }) => {

  return (
    <div>
      <label htmlFor={inputName} className="text-sm text-gray-500">{labelName}</label>
      <input className="w-full border rounded-lg p-2 outline-[#F0F9FF] text-gray-800" name={inputName} id={inputName} type={inputType} onChange={onChange} required={required} />
    </div>
  );
};

export default Input;
