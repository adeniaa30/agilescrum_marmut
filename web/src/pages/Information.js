import React from "react";
import { listImage } from "../assets/images/LinkImages";
import Starts from '../assets/icons/stars.png'

export default function Information() {
  return (
    <div className="mt-[30px] mb-[100px]">
      <div className="flex">
        <p className="text-[#8B8BA5]  m-auto">Information</p>
      </div>

      <div className="flex">
        <p className="text-black font-medium font-bold text-[32px] m-auto">
          Special To Buy
        </p>
      </div>

      <div className="flex justify-center mt-[20px]">
        {listImage.map((e) => {
          return (
            <div className="w-[287px] h-[404px] rounded-[20px] overflow-hidden mx-5 shadow-2xl shadow-neutral-200">
              <img src={e} className="w-full h-[300px] rounded-b-[30px] " />
              <div className="flex flex-col">
                <p className="text-black text-[22px] font-medium m-auto">Marmut</p>
                <p className="text-[#8B8BA5] text-[16px] m-auto">Super Ras</p>
                <img src={Starts} className="w-[180px] m-auto"/>
              </div>
            
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
