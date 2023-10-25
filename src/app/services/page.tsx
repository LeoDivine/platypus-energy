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
      <div className="lg:flex-row flex-col flex justify-around flex-wrap text-[#333] gap-[30px] mt-[20px] px-[30px] mb-[30px]">
        <div className="bg-[#e2b22d] justify-between p-[20px] lg:flex lg:w-[45%] rounded-[20px]">
          <div className="">
            <h1 className="text-[20px]">Delivery and Installation</h1>
            <p className="mt-[20px]">
              We recommend that you always use a Platypus Solar Energy approved
              installer for your installations. Our installers will help you
              understand how the inverter works and under what condition it
              should operate. There are certain guidelines such as which
              appliances should not be used with your inverter system as well as
              certain tips to ensure that your batteries last longer. Your
              installer will help you these so that you can the most out of your
              purchase. We also provide delivery service if required.
            </p>
          </div>
          <div className="my-auto hidden lg:inline-block ml-3">{Delivery}</div>
        </div>
        <div className="bg-[#e2b22d] justify-between p-[20px] lg:flex lg:w-[45%] rounded-[20px]">
          <div className="">
            <h1 className="text-[20px]">Maintenance</h1>
            <p className="mt-[20px]">
              We recommend that you always use a Platypus Solar Energy approved
              installer for your installations. Our installers will help you
              understand how the inverter works and under what condition it
              should operate. There are certain guidelines such as which
              appliances should not be used with your inverter system as well as
              certain tips to ensure that your batteries last longer. Your
              installer will help you these so that you can the most out of your
              purchase. We also provide delivery service if required.
            </p>
          </div>
          <div className="my-auto hidden lg:inline-block ml-3">
            {Maintenance}
          </div>
        </div>
        <div className="bg-[#e2b22d] justify-between p-[20px] lg:flex lg:w-[45%] rounded-[20px]">
          <div className="">
            <h1 className="text-[20px]">Support</h1>
            <p className="mt-[20px]">
              We recommend that you always use a Platypus Solar Energy approved
              installer for your installations. Our installers will help you
              understand how the inverter works and under what condition it
              should operate. There are certain guidelines such as which
              appliances should not be used with your inverter system as well as
              certain tips to ensure that your batteries last longer. Your
              installer will help you these so that you can the most out of your
              purchase. We also provide delivery service if required.
            </p>
          </div>
          <div className="my-auto hidden lg:inline-block ml-3">{Support}</div>
        </div>
      </div>
    </div>
  );
}
function useState() {
  throw new Error("Function not implemented.");
}
