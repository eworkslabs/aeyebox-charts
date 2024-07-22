import Image from "next/image";
import { FiSun, FiLogOut } from "react-icons/fi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { MdApps } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import MenuLateralMobile from "../lateralmenu/LateralMenuMobile";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="lg:ml-32 lg:mt-5 lg:mr-5 rounded-lg bg-[#DFECF5] p-4 border-b border-[#DFECF5]">
            <div className="flex items-center gap-4 md:gap-10">
                <div className="flex items-center gap-3">
                    <button onClick={toggleMenu} className="flex items-center lg:hidden">
                        {menuOpen ? <FiX className="text-[21px] text-[#07314a]" /> : <FaBars className="text-[21px] text-[#07314a]" />}
                    </button>
                    <MdApps className="text-[25px] text-[#07314a]" />
                    <h1 className="hidden lg:block font-bold">e.works</h1>
                    <h1 className="hidden lg:block -ml-2">apps</h1>
                </div>
                <div className="flex items-center bg-white rounded-full p-4 shadow-md flex-grow">
                    <HiOutlineMicrophone className="text-2xl " />
                    <input type="text" placeholder="Type or say your prompt." className="outline-none w-full text-gray-600 pl-5 placeholder:text-black placeholder:text-[14px] md:placeholder:text-[14px]" />
                    <Image src="/images/fi_7406540.png" alt="lupa" height={24} width={24} />
                </div>
                <div className="flex gap-5">
                    <FiSun className="text-gray-400 text-2xl" />
                    <FiLogOut className="text-red-500 text-2xl" />
                </div>
            </div>
            {menuOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleMenu}>
                    <div className={`fixed top-0 left-0 w-32 h-full bg-[#DFECF5] p-4 transform transition-transform duration-1000 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
                        <MenuLateralMobile toggleMenu={toggleMenu} />
                    </div>
                </div>
            )}
        </header>
    );
}
