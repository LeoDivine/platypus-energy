import { EmailIcon, LocationIcon, PhoneIcon } from "@/utils/icons";
import Link from "next/link";
import React from "react";
import {Linkinfo} from "./linkInfo";
import { LINK_INFORMATION, SOCIALDETAILS } from "@/utils/const";
import Socialinfo from "./socialinfo";

export default function Footer() {
  return (
    <>
      <div className="bg-[#333333] justify-between lg:items-start flex-col lg:flex-row flex p-[40px] lg:p-[30px]">
        <div className="xl:w-[25%] md:w-[30%] flex flex-col gap-4">
          <span className="text-[#7a7463] flex gap-[20px]">
            {LocationIcon}{" "}
            <p className="text-white">
              5th Avenue, O Close, Festac Town, Lagos, Nigeria
            </p>{" "}
          </span>
          <hr className="border-[#e2b22d] hidden lg:inline" />
          <span className="gap-[20px] text-[#e2b22d] flex">
            {PhoneIcon}{" "}
            <Link href="+2348064150715">
              <p className="text-white">0806 4150 715</p>{" "}
            </Link>
            <Link href="tel:+234906939152">
              <p className="text-white">0906 9390 152</p>{" "}
            </Link>
          </span>
          <hr className="border-[#e2b22d] hidden lg:inline" />

          <span className="gap-[20px] text-[#e2b22d] flex">
            {EmailIcon}{" "}
            <p className="text-white">
              <Link
                className="hover:text-[#e2b22d] transition-all"
                href="mailto:platypussolarenergy@gmail.com?subject=Enquiries"
              >
                platypussolarenergy@gmail.com
              </Link>
            </p>{" "}
          </span>
          <hr className="border-[#e2b22d] hidden lg:inline" />
        </div>
        <div className="mt-[20px] w-full xl:w-[10%] md:w-[20%] lg:mt-0 text-white">
          <h1 className="font-bold">USEFUL LINKS</h1>
          <hr className="border-[#e2b22d]" />
          <Linkinfo info={LINK_INFORMATION} />
        </div>
        <div className="text-white lg:mt-[20px] mt-[20px]">
          <h1 className="font-bold">CONNECT WITH US ON:</h1>
          <hr className="border-[#e2b22d]" />
          <Socialinfo socials={SOCIALDETAILS} />
        </div>
      </div>
      <div className="bg-[#1f1f1f] text-center text-white p-[20px]">
        <p className="font-bold">© Copyright 2023 | Platypus Solar Energy </p>
      </div>
    </>
  );
}
