import React from "react";

export default function Home() {
  return (
    <div className="flex mt-[100px] justify-between ">
      <div className="ml-[180px] max-w-[600px] m-auto ">
        <p className="text-black text-[46px] font-bold font-mono">Hello Marmot Lovers,</p>
        <p className="text-[#8B8BA5] font-normal text-lg mt-[30px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora ratione ad eveniet, blanditiis accusamus. Magni eveniet inventore officia, quam facilis, asperiores non minima reiciendis natus, accusantium eum nobis neque.
        </p>
        <button className="bg-yellow-300  text-black text-[18px] mt-[40px] font-mono w-[210px] h-[50px] rounded-t-[30px] rounded-b-[10px]">Learn More</button>
      </div>

      <div className="mr-[180px]">
        <img
          src='https://images.unsplash.com/photo-1512483652399-7a1f99aa0dd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpbmVhJTIwcGlnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          style={{ width: 626, height: 405 }}
          className="rounded-t-[50px] rounded-b-[100px]"
        />
      </div>
    </div>
  );
}
