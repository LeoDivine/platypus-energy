import { SectionComp2 } from "@/components/sectionComp";
import Socialinfo from "@/components/socialinfo";
import { SOCIALDETAILS } from "@/utils/const";
import { EmailIcon, PhoneIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="relative">
      <div className='bg-[url("/aboutbg.webp")] h-[400px] bg-cover bg-no-repeat'>
        <div className="bg-gradient-to-r from-[#000000dc] to-[#00000096] absolute w-full h-[400px]">
          <div className="py-[200px] text-white text-center">
            <h3 className="text-[60px]">About Us</h3>
            <p>Innovative power solution for everyone</p>
          </div>
        </div>
      </div>
      <>
        <SectionComp2
          header="TEE - SERVICES"
          emphasis="About"
          content="At Platypus Solar Energy, we believe in putting our customers at the highest values by listening to their needs and problems giving them tailor-made solutions. Our dedication to customer support sets us apart. Our uncompromised quality is a set standard in Platypus Solar Energy, with tough testings done on our inverters, we believe they can stand the test of times. We deliver both for commercial and residential"
          image="/service.jpg"
          link=""
          className="flex-row-reverse"
        />
        <div
          id="contact"
          className="lg:px-[100px] lg:py-[30px] py-[20px] px-[20px]"
        >
          <h1 className="text-[30px] text-center text-[#333]">
            Get your <span className="text-[#e2b22d]">inverter</span> today
          </h1>
          <div className="lg:flex gap-8 mt-[20px] justify-center">
            <div className="border-[#e2b22d] border-2 rounded-[10px] w-full xl:w-[40%] xl:px-[50px] px-[10px] py-[20px] text-[#333] md:w-[100%] md:px-[20px]">
              <p>
                Request for your installations or maintenance by contacting us
                via the available mediums.
              </p>
              <p className="pt-[20px]">Contact Details</p>
              <Link
                className="hover:underline"
                href="mailto:joshuaebubechukwu1@gmail.com?subject=Enquiries"
              >
                <span className="mt-[10px] flex items-center gap-3 text-[#e2b22d]">
                  {EmailIcon}{" "}
                  <p className="text-[#333] text-[13px] lg:text-[16px]">
                    joshuaebubechukwu1@gmail.com
                  </p>
                </span>
              </Link>
              <Link className="hover:underline" href="">
                <span className="mt-[10px] flex items-center gap-3 text-[#e2b22d]">
                  {PhoneIcon} <p className="text-[#333]">+234 906 9390 152</p>
                </span>
              </Link>
              <p className="pt-[20px]">Our Socials</p>
              <Socialinfo socials={SOCIALDETAILS} />
            </div>
            <Image
              className="hidden lg:inline md:w-[40%]"
              src="/contact.svg"
              alt="contact"
              height="500"
              width="500"
            />
          </div>
        </div>
      </>
    </div>
  );
}
