import React from "react";
import Sociallink from "./sociallink";

interface SOCIALINFO {
  socials: {
    icon: any;
    link: string;
  }[];
}

export default function Socialinfo({ socials }: SOCIALINFO) {
  return (
    <div className="flex gap-2 mt-[20px]">
      {socials.map((i, k) => (
        <Sociallink icon={i.icon} link={i.link} key={k} />
      ))}
    </div>
  );
}
