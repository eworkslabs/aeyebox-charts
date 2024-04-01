import type { NextPage } from "next";
import React from "react";

const FrameComponent: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-end justify-start gap-[23px] max-w-full text-left text-lgi text-darkslategray font-murecho mq975:flex-wrap">
      <div className="flex-[0.9019] bg-gold flex flex-col items-start justify-start pt-[19px] px-[18px] pb-[134px] box-border gap-[56px] min-w-[275px] max-w-full z-[1] text-gray mq450:gap-[28px_56px] mq450:pt-5 mq450:pb-[87px] mq450:box-border mq450:flex-1">
        <div className="w-[367px] h-[367px] relative bg-gold hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[42px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 rounded-11xl bg-gainsboro flex flex-row items-start justify-start py-[7px] px-14 whitespace-nowrap z-[1]">
            <div className="h-[42px] w-[247px] relative rounded-11xl bg-gainsboro hidden" />
            <div className="relative z-[1]">nome do post-it</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px] text-darkslategray">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-[25px] w-[21px]" type="checkbox" />
            <div className="relative inline-block min-w-[76px] z-[1]">
              Tarefa 01
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-[25px] w-[21px]" type="checkbox" />
            <div className="relative inline-block min-w-[77px] z-[1]">
              Tarefa 02
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-[25px] w-[21px]" type="checkbox" />
            <div className="relative inline-block min-w-[77px] z-[1]">
              Tarefa 03
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[275px] max-w-full">
        <div className="self-stretch bg-darksalmon flex flex-col items-start justify-start pt-5 px-4 pb-[129px] box-border gap-[60px] max-w-full z-[1] mq450:gap-[30px_60px] mq450:pb-[84px] mq450:box-border">
          <div className="w-[367px] h-[367px] relative bg-darksalmon hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-11 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <button className="cursor-pointer [border:none] py-[7px] px-14 bg-gainsboro flex-1 rounded-11xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-silver">
              <div className="h-[42px] w-[247px] relative rounded-11xl bg-gainsboro hidden" />
              <div className="relative text-lgi font-murecho text-gray text-left z-[1]">
                nome do post-it
              </div>
            </button>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <input className="m-0 h-[25px] w-[21px]" type="checkbox" />
              <div className="relative inline-block min-w-[76px] z-[1]">
                Tarefa 01
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <input className="m-0 h-[25px] w-[21px]" type="checkbox" />
              <div className="relative inline-block min-w-[77px] z-[1]">
                Tarefa 02
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <input className="m-0 h-[25px] w-[21px]" type="checkbox" />
              <div className="relative inline-block min-w-[77px] z-[1]">
                Tarefa 03
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[0.9128] bg-lightsteelblue flex flex-col items-start justify-start pt-[26px] px-4 pb-[140px] box-border gap-[43px] min-w-[275px] max-w-full z-[1] mq450:gap-[21px_43px] mq450:pt-5 mq450:pb-[91px] mq450:box-border mq450:flex-1">
        <div className="w-[367px] h-[367px] relative bg-lightsteelblue hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-11 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <button className="cursor-pointer [border:none] py-[7px] px-14 bg-gainsboro flex-1 rounded-11xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-silver">
            <div className="h-[42px] w-[247px] relative rounded-11xl bg-gainsboro hidden" />
            <div className="relative text-lgi font-murecho text-gray text-left z-[1]">
              nome do post-it
            </div>
          </button>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-[25px] w-[21px]" type="checkbox" />
            <div className="relative inline-block min-w-[76px] z-[1]">
              Tarefa 01
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-[25px] w-[21px]" type="checkbox" />
            <div className="relative inline-block min-w-[77px] z-[1]">
              Tarefa 02
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <input className="m-0 h-[25px] w-[21px]" type="checkbox" />
            <div className="relative inline-block min-w-[77px] z-[1]">
              Tarefa 03
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;