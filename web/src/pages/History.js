import React from "react";

export default function History() {
  return (
    <div className=" max-w-4xl m-auto relative">
      <p className="text-[500px] font-bold text-[#F1F1F1]">“</p>
      <div className="absolute top-[270px] left-[90px]">
        <p className="text-[20px] font-normal text-black font-mono text-justify max-w-[736px] max-h-[200px] m-auto">
          Marmot adalah sejenis hewan pengerat yang tergolong familia Sciuridae
          (bajing) dengan genus Marmota Marmot umumnya hidup di daerah
          pegunungan, seperti Alpen atau Pirenia di Eropa, Pegunungan Rocky atau
          Sierra Nevada di Amerika Serikat, dan Kanada bagian utara. Marmot
          umumnya membuat sarang di dalam tanah dan melakukan hibernasi selama
          musim dingin. Kebanyakan marmot tergolong hewan sosial; marmot
          berkomunikasi satu sama lain dengan siulan nyaring, terutama jika
          merasa ada bahaya.
        </p>
      </div>

      <div className="flex absolute bottom-16 right-[400px]">
        <img
          src="https://images.unsplash.com/photo-1512087499053-023f060e2cea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3VpbmVhJTIwcGlnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="w-[100px] h-[100px] rounded-full m-auto shadow-lg shadow-slate-300" 
        />
      </div>
    </div>
  );
}
