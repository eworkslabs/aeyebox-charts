import type { NextPage } from "next";
import FrameComponent from "@/components/frame.component";

const Desktop: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start tracking-[normal] mq950:pl-5 mq950:pr-5 mq950:box-border">
      <nav className="m-0 w-[242px] bg-steelblue flex flex-col items-start justify-start pt-[15px] px-[27px] pb-[845px] box-border gap-[27px] text-left text-xl text-white font-murecho mq450:pb-[357px] mq450:box-border mq950:hidden mq950:pt-5 mq950:pb-[549px] mq950:box-border">
        <div className="w-[242px] h-[1024px] relative bg-steelblue hidden" />
        <h1 className="m-0 h-[52px] relative text-[42px] font-bold font-inherit inline-block shrink-0 z-[1] mq450:text-[25px] mq950:text-[34px]">
          <span>e</span>
          <span className="text-darkslategray">.</span>
          <span>check</span>
        </h1>
        <div className="relative inline-block min-w-[89px] z-[1] mq450:text-base">
          <span>{`→ `}</span>
          <span className="font-light">Ewrorks</span>
        </div>
        <div className="relative font-light inline-block min-w-[51px] z-[1] mq450:text-base">
          Syrius
        </div>
      </nav>
      <main className="flex-1 bg-gainsboro flex flex-col items-start justify-start pt-[38px] px-[21px] pb-[559px] box-border gap-[27px] max-w-[calc(100%_-_242px)] text-left text-[22px] text-darkslategray font-murecho mq450:pt-5 mq450:pb-[236px] mq450:box-border mq950:pt-[25px] mq950:pb-[363px] mq950:box-border mq950:max-w-full">
        <div className="w-[1198px] h-[1024px] relative bg-gainsboro hidden max-w-full" />
        <div className="relative font-medium inline-block min-w-[95px] z-[1] mq450:text-[18px]">
          → Eworks
        </div>
        <FrameComponent />
      </main>
    </div>
  );
};

export default Desktop;