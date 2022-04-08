import React from "react";
import Kutip from '../assets/icons/kutip.png'

export default function History() {
  return (
    <div className=" max-w-sm mx-auto mb-[90px] md:max-w-3xl lg:max-w-4xl relative mt-[90px]">
      <img src={Kutip} alt="Kutip" className="w-[80px] opacity-10 lg:w-[100px]  md:max-w-2xl"/>
      <div className=" top-[10px]  mx-auto p-5 absolute lg:top-[20px]">
        <p className="text-[18px] font-normal text-black font-mono text-justify ">
          (bajing) dengan genus Marmota Marmot umumnya hidup di daerah
          pegunungan, seperti Alpen atau Pirenia di Eropa, Pegunungan Rocky atau
          Sierra Nevada di Amerika Serikat, dan Kanada bagian utara. Marmot
          umumnya membuat sarang di dalam tanah dan melakukan hibernasi selama
          musim dingin. Kebanyakan marmot tergolong hewan sosial; marmot
          berkomunikasi satu sama lain dengan siulan nyaring, terutama jika
          merasa ada bahaya.
        </p>
      </div>

      <div className="flex bottom-16 mt-[430px] right-[400px] md:mt-[250px] lg:mt-[190px]">
        <img
          src="https://images.unsplash.com/photo-1512087499053-023f060e2cea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3VpbmVhJTIwcGlnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img"
          className="w-[100px] h-[100px] rounded-full m-auto shadow-lg shadow-slate-300" 
        />
      </div>
    </div>
  );
}
