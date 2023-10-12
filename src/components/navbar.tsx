"use client";
import React, { useState } from "react";
import { NavLinkinfo } from "./linkInfo";
import { LINK_INFORMATION } from "@/utils/const";
import { NavClose, NavOpen } from "@/utils/icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#333333] w-full absolute z-10 lg:flex-row flex-col flex justify-between py-[20px] lg:px-[20px]">
      <div className="flex justify-between px-[20px] text-white">
        <h1 className="text-[30px] text-center">TEE-SERVICES</h1>
        <div onClick={() => setOpen(!open)}>
          {" "}
          {open ? (
            <div className="lg:hidden">{NavClose}</div>
          ) : (
            <div className="lg:hidden">{NavOpen}</div>
          )}
        </div>
      </div>
      <div
        className={` ${open ? "h-[300px]" : "h-[0px]"} lg:overflow-visible overflow-hidden transition-all flex lg:flex-row flex-col`}
      >
        <NavLinkinfo
          className="flex lg:flex-row flex-col justify-around"
          info={LINK_INFORMATION}
        />
      </div>
    </div>
  );
}
