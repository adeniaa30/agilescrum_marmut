import React from "react";

export default function Home() {
  return (
    <div className=" mt-[30px] md:max-w-4xl lg:mx-w-5xl lg:flex lg:justify-between xl:max-w-6xl 2xl:max-w-7xl">
      <div className="lg:w-1/2 lg:my-auto xl:my-auto 2xl:my-auto">
        <p className="text-black text-[20px] mx-[30px] font-bold font-mono text-center mb-3 md:text-[35px] lg:text-left ">
          Hello Marmot Lovers,
        </p>
        <div className="flex lg:hidden">
          <img
            src="https://images.unsplash.com/photo-1512483652399-7a1f99aa0dd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpbmVhJTIwcGlnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="img"
            className="rounded-t-[50px] w-[300px] h-[205px] rounded-b-[100px] m-auto overflow-hidden  md:w-[400px] md:h-[305px]"
          />
        </div>
        <p className="text-[#8B8BA5] font-normal text-[18px] mt-[15px] mx-[30px] text-center md:text-[18px] md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          tempora ratione ad eveniet, blanditiis accusamus. Magni eveniet
          inventore officia, quam facilis, asperiores non minima reiciendis
          natus, accusantium eum nobis neque.
        </p>
        <div className="flex lg:hidden">
          <button className="bg-yellow-300 items-center mx-auto text-black text-[18px] mt-[40px] font-mono w-[210px] h-[50px] rounded-t-[30px] rounded-b-[10px]">
            Learn More
          </button>
        </div>

        <button className="hidden lg:block bg-yellow-300 items-center mx-[30px] text-black text-[18px] mt-[40px] font-mono w-[210px] h-[50px] rounded-t-[30px] rounded-b-[10px]">
          Learn More
        </button>
      </div>

      <div className="hidden lg:block 2xl:mx-[60px]">
        <img
          src="https://images.unsplash.com/photo-1512483652399-7a1f99aa0dd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpbmVhJTIwcGlnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="img"
          // style={{ width: 626, height: 405 }}
          className="rounded-t-[50px] rounded-b-[100px] lg:w-[405px] lg:h-[305px] xl:w-[505px] xl:h-[405px] 2xl:w-[605px] 2xl:h-[405px] self-end"
        />
      </div>
    </div>
  );
}
