import Link from "next/link";

export default function LateralMenu() {
  return (
    <div className=" bg-[#2F2F2F]  w-[242px] h-[1649px] text-left text-xl text-white font-murecho">
      <div className="  w-[242px] h-[1649px]">
        <div />
        <b className="text-[42px] inline-block w-[159px] h-[52px]">
          <div className="pl-20 flex justify-center items-center mt-5 ">
            <span>e</span>
            <span className="text-steelblue">.</span>
            <span>dash</span>
          </div>
        </b>
        <Link href="/" className=" flex justify-center items-center mt-5 no-underline font-light text-white">
          Overview
        </Link>
        <Link href="/companies" className=" flex justify-center items-center mt-5 no-underline font-light text-white">
          Companies
        </Link>
        <Link href="/locations" className=" flex justify-center items-center mt-5 no-underline font-light text-white">
          Locations
        </Link>
        <Link href="/plants" className=" flex justify-center items-center mt-5 no-underline font-light text-white">
          Plants
        </Link>
        <Link href="/lines" className=" flex justify-center items-center mt-5 no-underline font-light text-white">
          Lines
        </Link>
        <Link href="/machines" className=" flex justify-center items-center mt-5 no-underline font-light text-white">
          Machines
        </Link>
      </div>
    </div>
  );
}
