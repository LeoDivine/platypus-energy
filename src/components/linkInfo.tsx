'use client'
import Link from "next/link";
import React from "react";
import Footerlinks from "./footerlinks";

interface FOOTERI {
  info: {
    title: string;
    link: string;
  }[];
  className?: string;
}

export function Linkinfo({ info , className}: FOOTERI) {
  return (
    <div className={`${className}`}>
      {info.map((i, k) => (
        <Footerlinks title={i.title} link={i.link} key={k} />
      ))}
    </div>
  );
}
export function NavLinkinfo({ info , className}: FOOTERI) {
  return (
    <div className={`${className}`}>
      {info.map((i, k) => (
        <Footerlinks className="lg:ml-[40px] ml-[20px] mt-[20px] lg:mt-0 text-white" title={i.title} link={i.link} key={k} />
      ))}
    </div>
  );
}
