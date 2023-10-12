import Link from "next/link";
import React from "react";

interface SOCIALLINK {
  icon: any;
  link: string;
}

export default function  Sociallink({ icon, link }: SOCIALLINK) {
  return (
    <div>
      <Link className="hover:text-[#e2b22d] transition-all" href={link}>
        {icon}
      </Link>
    </div>
  );
}
