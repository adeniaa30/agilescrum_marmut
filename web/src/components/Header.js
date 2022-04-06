import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between mt-[50px]">
      <div className="ml-[180px]">
        <p className="font-extrabold text-black text-xl">Marmoot</p>
      </div>
      <div className="flex mr-[180px]">
        <p className="mx-3">Home</p>
        <p className="mx-3">Information</p>
        <p className="mx-3">Marchandise</p>
        <p className="mx-3">About</p>
      </div>
    </div>
  );
}
