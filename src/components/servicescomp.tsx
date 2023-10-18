import React from "react";

interface SERVICESCOMP {
  icon: any;
  content: string;
}

export default function Servicescomp({ icon, content }: SERVICESCOMP) {
  return (
    <div className="group rounded-[20px] p-[30px] text-center cursor-pointer bg-[#e2b22d] hover:bg-[#d0a327] hover:scale-110 transition-all flex flex-col items-center lg:w-[40%]">
      <span className="group-hover:translate-y-7 transition-all">{icon}</span>
      <p className="pt-[50px]">{content}</p>
    </div>
  );
}
