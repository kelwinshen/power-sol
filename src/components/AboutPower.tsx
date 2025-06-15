import { power1 } from "../assets";
import Image from "next/image";

import React from "react";

const AboutPower = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="about"
      className="w-full px-4 py-8 md:py-24 sm:container mx-auto"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start ">
        <div className="w-full lg:w-[1200px]">
          <h2 className="text-textColor text-4xl sm:text-7xl font-semibold ">
            About $POWER
          </h2>
          <br />
          <p className="text-textColor text-lg sm:text-xl">
          Power is a majestic white rhino residing at Khao Kheow Open Zoo in Si Racha, Chonburi, Thailand with Moo Deng.
          <br /><br />
          This gentle giant gained fame on the internet for his awe-inspiring presence.
          <br /><br />
          Known for his powerful stature, calm personality, and striking white-gray coat, Power has become a symbol of strength, resilience, and hope.
          <br /><br />
          Now, his legacy roams forever on the Solana blockchain. <br /> Stand with Power as a beacon of hope!
          </p>
        </div>

        <Image
          src={power1}
          alt="power1"
          className="w-full h-auto  border-[3px] border-black rounded-lg"
        />
      </div>

      <div
        onClick={() => handleScroll("#swap")}
        className="text-black bg-primaryColor border-[3px] border-black rounded-lg p-4 sm:max-w-fit sm:mx-auto break-words sm:break-normal mt-24 cursor-pointer"
      >
        <p className="w-full text-lg sm:text-2xl">
          <b>Contract Address: JC1WWYCZEppkGt74p9rkYhQc8Tt1BJLcpssWYUEQpump</b>
        </p>
      </div>
    </section>
  );
};

export default AboutPower;
