import { closeIcon, ham, logo } from "../assets";
import Image from "next/image";
import React from "react";

const NavigationMenus = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleScroll = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close the menu after clicking  
  };

  const showmenu =
    "absolute bg-white w-full left-0 top-[90px] -z-20 px-4 py-3 border-[3px] border-black rounded-b-lg flex-col gap-3 text-xl";

  return (
    <>
      <section className="w-full fixed top-0 z-50">
        <div className="bg-[#C8F3FC] relative">
           <p className="text-center text-lg uppercase ">
            <span className="scrolling-text">
              buy $POWER &nbsp; buy $POWER &nbsp; buy $POWER &nbsp; buy $POWER
              &nbsp; buy $POWER &nbsp; buy $POWER &nbsp; buy $POWER &nbsp; buy
              $POWER &nbsp;buy $POWER &nbsp;buy $POWER &nbsp;buy $POWER &nbsp;buy
              $POWER &nbsp;buy $POWER &nbsp;buy $POWER &nbsp;
            </span>
          </p>
        </div>

        <div className="bg-white w-full border-[3px] border-black rounded-b-lg z-50">
          <div className="flex flex-row gap-1 mx-auto justify-between px-4 py-[14px] lg:py-[30px] items-center sm:container">
            <div className="flex flex-raw gap-1 items-center">
              <Image src={logo} alt="logo" className="w-[30px] sm:w-[60px]" />
              <span className="text-2xl font-semibold">$POWER</span>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <ul
                className={`${
                  isMenuOpen ? showmenu : "hidden"
                } lg:flex lg:flex-row sm:gap-3 sm:text-base sm:font-semibold xl:font-normal xl:text-2xl`}
              >
                <li
                  onClick={() => handleScroll("#about")}
                  className="hover:underline cursor-pointer"
                >
                  About
                </li>
                <li
                  onClick={() => handleScroll("#howtobuy")}
                  className="hover:underline cursor-pointer"
                >
                  How to Buy
                </li>
                <li
                  onClick={() => handleScroll("#tokenomics")}
                  className="hover:underline cursor-pointer"
                >
                  Tokenomics
                </li>
                <li
                  onClick={() => handleScroll("#roadmap")}
                  className="hover:underline cursor-pointer"
                >
                  Road Map
                </li>
                <li
                  onClick={() => handleScroll("#crash")}
                  className="hover:underline cursor-pointer"
                >
                  Crash
                </li>
                <li
                  onClick={() => handleScroll("#meme")}
                  className="hover:underline cursor-pointer"
                >
                  Meme
                </li>
                
                <li
                  onClick={() => handleScroll("#empower")}
                  className="hover:underline cursor-pointer"
                >
                  Empower
                </li>
              </ul>
              <button
                onClick={() => handleScroll("#swap")}
                className="bg-primaryColor px-[7px] sm:px-[12px] sm:py-[7px] py-[4ps] border-[2px] border-black rounded-md text-black text-lg md:text-2xl"
              >
                Buy $Power
              </button>
              {/* menus */}
              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Image
                  src={isMenuOpen ? closeIcon : ham}
                  alt="icon"
                  className="w-6 lg:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavigationMenus;
