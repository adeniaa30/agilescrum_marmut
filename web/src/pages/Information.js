import React from "react";
import { listImage } from "../assets/images/LinkImages";
import Starts from "../assets/icons/stars.png";

export default function Information() {
  return (
    <div className="mt-[30px] mb-[100px] max-w-sm mx-auto md:max-w-3xl xl:max-w-4xl 2xl:max-w-[1440px]">
      <div>
        <p className="text-[#8B8BA5]  m-auto text-center">Information</p>
      </div>

      <div>
        <p className="text-black font-bold text-[32px] m-auto text-center">
          Special To Buy
        </p>
      </div>

      <div className="mx-auto mt-[20px] md:mx-auto flex flex-col md:grid md:grid-cols-2 md:gap-8 xl:grid xl:grid-cols-3 xl:gap-8  2xl:grid 2xl:grid-cols-4 2xl:gap-8">
        {listImage.map((e) => {
          return (
            <div className="w-[287px] h-[404px] rounded-[20px] overflow-hidden mb-[20px] shadow-2xl shadow-neutral-200 mx-auto my-auto">
              <img src={e} alt="img" className="w-full h-[300px] rounded-b-[30px] " />
              <div className="flex flex-col">
                <p className="text-black text-[22px] font-medium m-auto">Marmut</p>
                <p className="text-[#8B8BA5] text-[16px] m-auto">Super Ras</p>
                <img src={Starts} alt="img" className="w-[180px] m-auto"/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
