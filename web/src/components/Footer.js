import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="flex m-auto mb-[50px] justify-center">
        <div className="my-auto mr-[100px]">
          <p className="text-black font-bold text-xl m-auto">Marmoot</p>
        </div>

        <div>
          <p className="text-black font-bold text-xl">Special</p>
          <p className="text-[#8B8BA5] font-normal">Give Food</p>
          <p className="text-[#8B8BA5] font-normal">Healthy </p>
          <p className="text-[#8B8BA5] font-normal">play together</p>
        </div>

        <div className="mx-[100px]">
          <p className="text-black font-bold text-xl">Company</p>
          <p className="text-[#8B8BA5] font-normal">APIs Developer</p>
          <p className="text-[#8B8BA5] font-normal">Career</p>
          <p className="text-[#8B8BA5] font-normal">Terms & Conditions</p>
          <p className="text-[#8B8BA5] font-normal">Privacy Policy</p>
        </div>

        <div>
          <p className="text-black font-bold text-xl">Be Our Friend</p>
          <p className="text-[#8B8BA5] font-normal">3, Season Park, Jakarta</p>
          <p className="text-[#8B8BA5] font-normal">support@marmot.co,id</p>
          <p className="text-[#8B8BA5] font-normal">011 - 1111 - 3333</p>
        </div>
      </div>
      <div className="flex mb-10">
        <p className="m-auto font-bold">&copy; Marmoot 2022</p>
      </div>
    </div>
  );
}
