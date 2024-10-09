interface InputProps {
  inputName: string;
  inputType: string;
  labelName: string;
  inputValue?: any;
  onChange?: any;
}

const Input: React.FC<InputProps> = ({ inputName, inputType, labelName, onChange }) => {

  return (
    <div>
      <label htmlFor={inputName} className="text-sm">{labelName}</label>
      <input className="w-full border rounded p-2" name={inputName} id={inputName} type={inputType} onChange={onChange} />
    </div>
  );
};

export default Input;
