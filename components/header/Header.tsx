import Image from "next/image";
import { FiSun, FiLogOut } from "react-icons/fi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { MdApps } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuLateralMobile from "../lateralmenu/LateralMenuMobile";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const menuVariants = {
        open: { x: 0 },
        closed: { x: "-100%" },
    };

    const iconVariants = {
        hidden: { opacity: 0, rotate: 90 },
        visible: { opacity: 1, rotate: 0 },
    };

    return (
        <header className="lg:ml-32 lg:mt-5 lg:mr-5 rounded-lg bg-[#DFECF5] p-4 border-b border-[#DFECF5]" style={{ fontFamily: 'Work Sans, sans-serif' }}>
            <div className="flex items-center gap-4 md:gap-10">
                <div className="flex items-center gap-3">
                    <button onClick={toggleMenu} className="flex items-center lg:hidden">
                        <AnimatePresence initial={false}>
                            {menuOpen ? (
                                <motion.div
                                    key="close"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={iconVariants}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FiX className="text-[21px] text-[#07314a]" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="open"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={iconVariants}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaBars className="text-[21px] text-[#07314a]" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                    <MdApps className="text-[25px] text-[#07314a]" />
                    <h1 className="hidden lg:block font-bold">e.works</h1>
                    <h1 className="hidden lg:block -ml-2">apps</h1>
                </div>
                <div className="flex items-center bg-white rounded-full p-4 shadow-md flex-grow">
                    <HiOutlineMicrophone className="text-xl" />
                    <input type="text" placeholder="Type or say your prompt." className="outline-none w-full text-gray-600 pl-2 md:pl-5 placeholder:text-black placeholder:text-[12px] md:placeholder:text-[14px] xs:placeholder:text-[9px]" />
                    <Image src="/images/fi_7406540.png" alt="lupa" height={19} width={19} />
                </div>
                <div className="flex gap-5">
                    <FiSun className="text-gray-400 text-lg" />
                    <FiLogOut className="text-red-500 text-lg" />
                </div>
            </div>
            <motion.div
                className={`fixed inset-0 z-50 bg-black bg-opacity-50 ${menuOpen ? 'block' : 'hidden'}`}
                onClick={toggleMenu}
                initial="closed"
                animate={menuOpen ? "open" : "closed"}
                variants={menuVariants}
                transition={{ type: "spring", stiffness: 50 }}
            >
                <motion.div
                    className="fixed top-0 left-0 w-32 h-full bg-[#DFECF5] p-4"
                    initial="closed"
                    animate={menuOpen ? "open" : "closed"}
                    variants={menuVariants}
                    transition={{ type: "spring", stiffness: 50 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <MenuLateralMobile toggleMenu={toggleMenu} />
                </motion.div>
            </motion.div>
        </header>
    );
}
