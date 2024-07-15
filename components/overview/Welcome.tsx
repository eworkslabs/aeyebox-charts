import { BiChevronDown } from "react-icons/bi";
import { IoFilterSharp } from "react-icons/io5";

export default function Welcome() {
    return (
        <section className="flex items-center bg-[#07314a] border-[#07314a] rounded-t-3xl">
            <div className="flex flex-grow p-5">
                <h1 className="text-white text-2xl font-light">Welcome,</h1>
                <h1 className="text-white text-2xl pl-2">(Nome do Usuário)</h1>
            </div>
            <div className="border border-white rounded-r-lg rounded-full justify-center items-center p-2 w-[250px] flex">
                <button className="text-white text-xl">Register</button>
            </div>
            <div className="border border-white rounded-l-lg border-l-transparent rounded-full justify-center items-center">
                <button>
                    <BiChevronDown className="text-[38px] text-white pt-2" />
                </button>
            </div>
            <div className="pl-14 pr-10">
                <button className="bg-[#cfe600] border-[#cfe600] text-[#07314a] p-2 w-[250px] justify-center items-center rounded-xl flex">
                    <IoFilterSharp className="text-xl" />
                    <h1 className="text-xl pl-2">Filters</h1>
                </button>
                
            </div>
        </section>
    )
}