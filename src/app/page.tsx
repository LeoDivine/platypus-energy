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
          <hgroup className="text-white lg:text-left text-center flex flex-col lg:items-start items-center px-[20px] xl:py-[200px] md:py-[10px] lg:pl-[40px] py-[250px]">
            <h3 className="lg:text-[60px] text-[30px] lg:w-[50%] font-bold">
              Let Tee-Services be your plug!!
            </h3>
            <p className="lg:w-[25%] mt-[10px]">
              24hr electricity and neat maintenance just for you
            </p>
            <Link className="" href="/services">
              <button className="flex bg-[#e2b22d] hover:bg-[#333] hover:text-[#e2b22d] transition-all lg:ml-0 lg:mx-[100px] px-[30px] py-[10px] lg:px-[20px] text-[#333] mt-[10px]">
                Our Services{" "}
                <span className="mt-[3px] ml-[10px] hover:text-[#e2b22d]">
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
          content="Sint sunt cupidatat dolore labore Lorem ipsum laborum nulla magna excepteur aute eu. Quis dolor fugiat consequat enim exercitation consectetur culpa duis consequat ea ullamco ex. Esse tempor veniam id consequat. Excepteur consectetur cillum excepteur exercitation amet aliquip aliqua id enim cillum non consequat Lorem. Labore est id nulla officia ex nostrud sunt elit mollit eu ut. Occaecat aliqua aliqua duis laboris proident."
          image="/service.jpg"
          className="lg:text-left"
        />
        <SectionComp
          className="lg:flex-row-reverse lg:text-right"
          link="/about"
          emphasis="About"
          header="the company"
          content="Sint sunt cupidatat dolore labore Lorem ipsum laborum nulla magna excepteur aute eu. Quis dolor fugiat consequat enim exercitation consectetur culpa duis consequat ea ullamco ex. Esse tempor veniam id consequat. Excepteur consectetur cillum excepteur exercitation amet aliquip aliqua id enim cillum non consequat Lorem. Labore est id nulla officia ex nostrud sunt elit mollit eu ut. Occaecat aliqua aliqua duis laboris proident."
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
                  What is an inverter
                </AccordionTrigger>
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
                  What is an inverter
                </AccordionTrigger>
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
                  What is an inverter
                </AccordionTrigger>
                <AccordionContent>
                  An inverter can be defined as an electric power converter
                  responsible for: - Converting alternate current from the grid
                  to direct current to charge the battery - Again converting
                  direct current from the battery into an alternating current
                  for running devices like fans, lights etc. during a power cut.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
