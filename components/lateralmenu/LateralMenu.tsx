import Image from "next/image";
import { BiHomeAlt } from "react-icons/bi";
import { BiBuildings } from "react-icons/bi";
import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineFactory } from "react-icons/md";
import { MdConveyorBelt } from "react-icons/md";
import { BiWrench } from "react-icons/bi";

export default function MenuLateral() {
    return (
        <section className="h-screen w-20 bg-[#DFECF5] flex flex-col items-center ml-5 mt-5 mb-5 border-[#DFECF5] rounded-lg">
            <div className="mt-8">
                <Image src="/images/e..png" alt="image" height={40} width={30} />
            </div>
            <div className="mt-10 flex flex-col gap-11 text-2xl text-[#07314a] ">
                <div className="group relative">
                    <BiHomeAlt />
                    <div className="hover-effect rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2"></div>
                </div>
                <div className="group relative">
                    <BiBuildings />
                    <div className="hover-effect rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2"></div>
                </div>
                <div className="group relative">
                    <MdOutlinePlace />
                    <div className="hover-effect rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2"></div>
                </div>
                <div className="group relative">
                    <MdOutlineFactory />
                    <div className="hover-effect rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2"></div>
                </div>
                <div className="group relative">
                    <MdConveyorBelt />
                    <div className="hover-effect rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2"></div>
                </div>
                <div className="group relative">
                    <BiWrench />
                    <div className="hover-effect rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2"></div>
                </div>
            </div>
        </section>
    )
}
