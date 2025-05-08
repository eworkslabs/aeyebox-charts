import { ReactNode } from "react"

interface HeaderEntityProps {
  entityName: string;
  toggleModal: any;
  children: ReactNode;
}

const HeaderEntity: React.FC<HeaderEntityProps> = ({ entityName, toggleModal, children }) => {
  return(
    <div className="flex">
      <div className="p-5 text-[#292929] text-[24px] font-semibold">
        <h1>{entityName}</h1>
      </div>
      <div className="flex items-center">
        <div className="pr-10">
          <button onClick={toggleModal} className="p-2 bg-[#cfe600] border-[#cfe600] text-[#07314a] justify-center items-center rounded-xl flex">
            Add +
          </button>
        </div>
      </div>
      {children}
    </div>
  )
}

export default HeaderEntity
