import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="m-auto mb-[50px] max-w-sm md:max-w-3xl md:grid md:grid-cols-2 md:gap-5 lg:max-w-4xl lg:grid lg:grid-cols-3 lg:gap-5 xl:max-w-[1440px] xl:grid xl:grid-cols-4 xl:gap-5">
        <div className="text-center mb-3">
          <p className="text-black font-bold text-xl m-auto">Marmoot</p>
        </div>

        <div className="text-center">
          <p className="text-black font-bold text-xl">Special</p>
          <p className="text-[#8B8BA5] font-normal">Give Food</p>
          <p className="text-[#8B8BA5] font-normal">Healthy </p>
          <p className="text-[#8B8BA5] font-normal">play together</p>
        </div>

        <div className="text-center">
          <p className="text-black font-bold text-xl">Company</p>
          <p className="text-[#8B8BA5] font-normal">APIs Developer</p>
          <p className="text-[#8B8BA5] font-normal">Career</p>
          <p className="text-[#8B8BA5] font-normal">Terms & Conditions</p>
          <p className="text-[#8B8BA5] font-normal">Privacy Policy</p>
        </div>

        <div className="text-center">
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
