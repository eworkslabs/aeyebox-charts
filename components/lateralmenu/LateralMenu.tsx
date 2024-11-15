import Image from "next/image";
import { BiHomeAlt, BiBuildings, BiWrench } from "react-icons/bi";
import { MdOutlinePlace, MdOutlineFactory, MdConveyorBelt } from "react-icons/md";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function MenuLateral() {
    const router = useRouter();

    const isActive = (path: string): boolean => router.pathname === path;

    return (
        <section className="fixed top-5 mr-40 left-5 h-[calc(100vh-40px)] w-20 bg-[#DFECF5] flex flex-col items-center rounded-lg shadow-lg">
            <div className="mt-8">
                <Image src="/images/e..png" alt="image" height={40} width={30} />
            </div>
            <div className="mt-10 flex flex-col gap-11 text-2xl text-[#07314a]">
                <div className="group relative">
                    <Link href="/"><BiHomeAlt /></Link>
                    <div className={`w-1 h-8 rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2 transition-colors ${isActive('/') ? 'bg-[#07314a]' : 'group-hover:bg-[#07314a]'}`}></div>
                </div>
                <div className="group relative">
                    <Link href="/companies"><BiBuildings /></Link>
                    <div className={`w-1 h-8 rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2 transition-colors ${isActive('/companies') ? 'bg-[#07314a]' : 'group-hover:bg-[#07314a]'}`}></div>
                </div>
                <div className="group relative">
                    <Link href="/locations"><MdOutlinePlace /></Link>
                    <div className={`w-1 h-8 rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2 transition-colors ${isActive('/locations') ? 'bg-[#07314a]' : 'group-hover:bg-[#07314a]'}`}></div>
                </div>
                <div className="group relative">
                    <Link href="/plants"><MdOutlineFactory /></Link>
                    <div className={`w-1 h-8 rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2 transition-colors ${isActive('/plants') ? 'bg-[#07314a]' : 'group-hover:bg-[#07314a]'}`}></div>
                </div>
                <div className="group relative">
                    <Link href="/lines"><MdConveyorBelt /></Link>
                    <div className={`w-1 h-8 rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2 transition-colors ${isActive('/lines') ? 'bg-[#07314a]' : 'group-hover:bg-[#07314a]'}`}></div>
                </div>
                <div className="group relative">
                    <Link href="/machines"><BiWrench /></Link>
                    <div className={`w-1 h-8 rounded-lg absolute -left-7 top-1/2 transform -translate-y-1/2 transition-colors ${isActive('/machines') ? 'bg-[#07314a]' : 'group-hover:bg-[#07314a]'}`}></div>
                </div>
            </div>
        </section>
    )
}