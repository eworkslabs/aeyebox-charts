import { ButtonProps } from "@/interfaces";

export default function Button({text, onClick, classDiv}: ButtonProps) {
  return(
    <button onClick={onClick} className={`bg-[#cfe600] border-[#cfe600] text-[#07314a] px-12 p-2 justify-center items-center rounded-xl flex ${classDiv}`}>
      <h1 className="text-lg lg:text-xl 2xl:text-xl">{text}</h1>
    </button>
  )
}