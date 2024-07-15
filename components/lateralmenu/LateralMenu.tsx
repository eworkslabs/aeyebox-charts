import Image from "next/image";
import { BiHomeAlt } from "react-icons/bi";
import { BiBuildings } from "react-icons/bi";
import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineFactory } from "react-icons/md";
import { MdConveyorBelt } from "react-icons/md";
import { BiWrench } from "react-icons/bi";
import Link from "next/link";

export default function MenuLateral() {
    return (
        <section className="h-screen w-20 bg-[#DFECF5] flex flex-col items-center ml-5 mt-5 mb-5 border-[#DFECF5] rounded-lg">
            <div className="mt-8">
                <Image src="/images/e..png" alt="image" height={40} width={30} />
            </div>
            <div className="mt-10 flex flex-col gap-11 text-2xl text-[#07314a] ">
                <div className="group relative">
                    <Link  href="/"><BiHomeAlt /></Link>
                    <div className="hover-effect rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2"></div>
                </div>
                <div className="group relative">
                    <Link  href="/companies"><BiBuildings /></Link>
                    <div className="hover-effect rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2"></div>
                </div>
                <div className="group relative">
                    <Link href="/locations"><MdOutlinePlace /></Link>
                    <div className="hover-effect rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2"></div>
                </div>
                <div className="group relative">
                    <Link href="/lines"><MdOutlineFactory /></Link>
                    <div className="hover-effect rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2"></div>
                </div>
                <div className="group relative">
                    <Link href="/plants"><MdConveyorBelt /></Link>
                    <div className="hover-effect rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2"></div>
                </div>
                <div className="group relative">
                    <Link href="/machines"><BiWrench /></Link>
                    <div className="hover-effect rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2"></div>
                </div>
            </div>
        </section>
    )
}
