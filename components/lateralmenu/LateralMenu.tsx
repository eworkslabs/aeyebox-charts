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
        <div className=" flex justify-center items-center mt-5 font-light">Overview</div>
        <div className=" flex justify-center items-center mt-5 font-light">Companies</div>
        <div className=" flex justify-center items-center mt-5 font-light">Locations</div>
        <div className=" flex justify-center items-center mt-5 font-light">Plants</div>
        <div className=" flex justify-center items-center mt-5 font-light">Machines</div>
      </div>
    </div>
  );
}
