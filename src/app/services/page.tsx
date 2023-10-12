import Servicescomp from "@/components/servicescomp";
import { Delivery, Installation, Maintenance, Support } from "@/utils/icons";
import React from "react";

export default function Services() {
  return (
    <div className="relative">
      <div className='bg-[url("/servicesbg.jpeg")] h-[400px] bg-cover bg-no-repeat'>
        <div className="bg-gradient-to-r from-[#000000dc] to-[#00000096] absolute w-full h-[400px]">
          <div className="py-[200px] text-white text-center">
            <h3 className="text-[60px]">Services</h3>
            <p>What we provide</p>
          </div>
        </div>
      </div>
      <div className=" lg:flex-row flex-col flex justify-around text-[#333] gap-[30px] mt-[20px] px-[30px] mb-[30px]">
        <Servicescomp icon={Delivery} content="Delivery" />
        <Servicescomp icon={Installation} content="Installation" />
        <Servicescomp icon={Maintenance} content="Maintenance" />
        <Servicescomp icon={Support} content="Support" />
      </div>
    </div>
  );
}
