import Image from "next/image";
import { FiSun, FiLogOut } from "react-icons/fi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { MdApps } from "react-icons/md";

export default function Header() {
    return (
        <header className="ml-32 mt-5 mr-5 rounded-lg  bg-[#DFECF5] p-4 border-b border-[#DFECF5]">
            <div className="flex items-center gap-80">
                <div className="flex">
                    <MdApps className="text-2xl text-[#07314a]" />
                    <h1 className="pl-2 font-bold">e.works</h1>
                    <h1 className="pl-1">apps</h1>
                </div>
                <div className="flex items-center bg-white rounded-full p-4 shadow-md flex-grow">
                    <HiOutlineMicrophone className="text-2xl " />
                    <input type="text" placeholder="Type or say your prompt." className="outline-none w-full text-gray-600 pl-5 placeholder:text-black" />
                    <Image src="/images/fi_7406540.png" alt="lupa" height={24} width={24} />
                </div>
                <div className="flex gap-5">
                    <FiSun className="text-gray-400 text-2xl" />
                    <FiLogOut className="text-red-500 text-2xl" />
                </div>
            </div>
        </header>
    );
}

