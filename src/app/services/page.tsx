import Servicescomp from "@/components/servicescomp";
import {
  Delivery,
  Installation,
  Maintenance,
  Notice,
  Support,
} from "@/utils/icons";
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
      <div className="px-[30px]">
        <h1 className="text-[30px] flex items-center text-[#333]">
          <span className="hidden lg:inline-block"> {Notice} </span> Delivery and Installations
        </h1>
        <div className="lg:px-[48px] pb-5">
          <p>
            We recommend that you always use a Platypus Solar Energy approved
            installer for your installations. Our installers will help you
            understand how the inverter works and under what condition it should
            operate. There are certain guidelines such as which appliances
            should not be used with your inverter system as well as certain tips
            to ensure that your batteries last longer. Your installer will help
            you these so that you can the most out of your purchase. We also
            provide delivery service if required.
          </p>
        </div>
      </div>
    </div>
  );
}
