import Link from "next/link";
import React from "react";

interface FOOTERLINKSI {
  link: string;
  title: string;
  className?: string;
}

export default function Footerlinks({ link, title, className }: FOOTERLINKSI) {
  return (
    <div className={`${className}`}>
      <Link className="hover:text-[#e2b22d] transition-all" href={link}>
        <p className="mt-[10px]">{title}</p>
      </Link>
    </div>
  );
}
