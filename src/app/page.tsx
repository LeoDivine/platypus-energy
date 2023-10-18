"use-client";
import { SectionComp } from "@/components/sectionComp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CaretRight } from "@/utils/icons";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="relative">
      {" "}
      <div className='bg-fixed bg-[url("/homebg.jpeg")] h-screen w-full  bg-cover bg-no-repeat'>
        <div className="bg-gradient-to-r from-[#000000dc] to-[#00000096] absolute w-full h-screen">
          <hgroup className="text-white lg:text-left text-center flex flex-col lg:items-start items-center px-[20px] lg:py-[200px] xl:py-[200px] md:py-[10px] lg:pl-[40px] py-[250px]">
            <h3 className="lg:text-[60px] text-[30px] lg:w-[50%] font-bold">
              Let Platypus Solar Energy be your plug!!
            </h3>
            <p className="lg:w-[25%] mt-[10px]">
              24hr electricity and neat maintenance just for you
            </p>
            <Link className="" href="/services">
              <button className="group flex bg-[#e2b22d] hover:bg-[#333] hover:text-[#e2b22d] transition-all lg:ml-0 lg:mx-[100px] px-[30px] py-[10px] lg:px-[20px] text-[#333] mt-[10px] items-center">
                Our Services{" "}
                <span className="group-hover:translate-x-2 transition-all ml-[10px] hover:text-[#e2b22d]">
                  {CaretRight}
                </span>
              </button>
            </Link>
          </hgroup>
        </div>
      </div>
      <div className="w-full">
        <SectionComp
          link="/services"
          emphasis="Services"
          header="we offer"
          content="Our technical team will work with you to determine what kind of inverter you need. Depending on your load, usage condition, priority appliances and budget. If required we can arrange for a site inspection and load estimation which will help you to better determine the kind of backup solution that you need."
          image="/service.jpg"
          className="lg:text-left"
        />
        <SectionComp
          className="lg:flex-row-reverse lg:text-right"
          link="/about"
          emphasis="About"
          header="the company"
          content="At Platypus Solar Energy we are more than just a company, we are your reliable plug for uninterrupted power supply, we also help you understand how inverters work and how they operate, giving you an understanding on how to take care of your inverters and keep them at best performance. We are commited to providing cutting-edge power solutions"
          image="/service.jpg"
        />
        <div className="pb-[40px] pt-[30px] w-full">
          <h1 className="text-[#333] text-center text-[30px]">
            <span className="text-[#e2b22d]">Frequently</span> asked questions
          </h1>
          <div className="lg:w-[50%] w-full px-[10px] mx-auto">
            <Accordion
              className="mt-[30px] text-[#333] px-[20px] bg-[#e2b22d]"
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>What is an inverter</AccordionTrigger>
                <AccordionContent>
                  An inverter can be defined as an electric power converter
                  responsible for: - Converting alternate current from the grid
                  to direct current to charge the battery - Again converting
                  direct current from the battery into an alternating current
                  for running devices like fans, lights etc. during a power cut.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              className="text-[#333] px-[20px] bg-[#e2b22d]"
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="">
                  What Features to Look For in the Best Inverter For Home?
                </AccordionTrigger>
                <AccordionContent>
                  - LCD Display: Inverters with LCD display show the Backup time
                  remaining in case of power cut and battery charging time in
                  case when grid supply is normal. It helps user to plan
                  activities efficiently and effectively. Heiwa and iChallenger
                  series are equipped with LCD displays. - Fast Battery
                  charging: In areas where there are frequent power cuts, it
                  becomes imperative for inverter to charge the battery faster
                  so that maximum backup is available in the next outage. Below
                  are features available in the inverters these days.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              className="text-[#333] px-[20px] bg-[#e2b22d]"
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="">
                  What is meant by 12 V inverter? How is it different from 24V
                  inverter?
                </AccordionTrigger>
                <AccordionContent>
                  Every INVERTER is rated in VA and Volt. VA is the capacity of
                  an INVERTER to run peak load and volt specifies the battery
                  voltage for which the inverter is designed. The battery which
                  is used in INVERTER application is lead acid battery with
                  voltage in multiples of 12 Volt. Each lead acid battery has 6
                  cells of 2V each which gives the total voltage as 12V. Hence,
                  a 12 Volt INVERTER means that it is designed to operate with 1
                  battery. A 24V inverter means that it is designed to operate
                  with 2 lead acid batteries.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              className="text-[#333] px-[20px] bg-[#e2b22d]"
              type="single"
              collapsible
            ></Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
