export default function LateralMenu() {
  return (
    <div className=" text-darkslategray font-murecho">
      <div className="absolute top-[0px] left-[0px] w-[242px] h-[1649px] text-left text-xl text-white">
        <div className="absolute top-[0px] left-[0px] bg-darkslategray w-[242px] h-[1649px]" />
        <b className="absolute top-[15px] left-[27px] text-[42px] inline-block w-[159px] h-[52px]">
          <span>e</span>
          <span className="text-steelblue">.</span>
          <span>dash</span>
        </b>
        <div className="absolute top-[94px] left-[27px] font-light">Overview</div>
        <div className="absolute top-[150px] left-[27px] font-light">Companies</div>
        <div className="absolute top-[206px] left-[27px] font-light">Locations</div>
        <div className="absolute top-[262px] left-[27px] font-light">Plants</div>
        <div className="absolute top-[318px] left-[27px] font-light">Machines</div>
      </div>
    </div>
  );
}
