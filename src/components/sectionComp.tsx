import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SECTIONCOMPI {
  className?: string;
  header: string;
  content: string;
  image: string;
  emphasis: string;
  link: string;
}

export function SectionComp({
  emphasis,
  className,
  header,
  content,
  image,
  link,
}: SECTIONCOMPI) {
  return (
    <div className="lg:pb-[20px] p-[30px] w-full mt-[30px] lg:px-[100px]">
      <h1 className="text-[30px] text-[#333] text-center">
        <span className="text-[#e2b22d]">{emphasis}</span> {header}
      </h1>
      <div
        className={`${className} text-center mt-[30px] gap-[20px] flex-col lg:flex-row flex`}
      >
        <div className="">
          <Image
            height="1500"
            width="1500"
            src={image}
            alt="image"
            className="rounded-[20px] lg:w-[1500px] md:w-[100%]"
          />
        </div>
        <div className="lg:w-[100%]">
          <p className="xl:pt-[60px] md:pt-0 text-[#333]">{content}</p>
          <Link href={link}>
            <button className="bg-[#e2b22d] hover:bg-[#333] hover:text-[#e2b22d] transition-all py-[10px] px-[20px] text-[#333] mt-[10px]">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export function SectionComp2({
  emphasis,
  className,
  header,
  content,
  image,
  link,
}: SECTIONCOMPI) {
  return (
    <div className="lg:pb-[20px] p-[30px] w-full mt-[30px] lg:px-[100px]">
      <h1 className="text-[30px] text-[#333] text-center justify-center">
        <span className="text-[#e2b22d]">{emphasis}</span> {header}
      </h1>
      <div
        className={`${className} lg:text-left text-center mt-[30px] gap-[20px] flex-col lg:flex-row flex`}
      >
        <div className="">
          <Image
            height="1500"
            width="1500"
            src={image}
            alt="image"
            className="rounded-[20px] lg:w-[1500px] md:w-[100%]"
          />
        </div>
        <div className="lg:w-[100%]">
          <p className="xl:pt-[60px] md:pt-0 text-[#333]">{content}</p>
        </div>
      </div>
    </div>
  );
}
