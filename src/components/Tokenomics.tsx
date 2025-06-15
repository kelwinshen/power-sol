import { logoBIG } from '../assets'
import Image from 'next/image'
import React from 'react'

const Tokenomics = () => {

  const handleScroll = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="tokenomics" className="w-full px-4 py-8 md:py-24 sm:container mx-auto">
        <h2 className="text-textColor text-4xl sm:text-7xl font-semibold text-center">
          Tokenomic
        </h2>
        <hr className="h-12 border-none md:h-42" />
        <div className="flex flex-col md:flex-row gap-24 items-center justify-center">
          <Image
            src={logoBIG}
            alt="POWER"
            className="md:max-w-[400px] max-w-[200px] h-auto"
          />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 bg-primaryColor border-[3px] border-black rounded-lg px-8 py-5 text-center">
              <h2 className="text-3xl ">Total Supply</h2>
              <p className="text-2xl">999,029,409.18</p>
            </div>

            <div className="flex flex-col gap-2 bg-primaryColor border-[3px] border-black rounded-lg px-8 py-5 text-center">
              <h2 className="text-3xl ">
              No Taxes, No Rhinoshit. Only Power!
              </h2>
            </div>
          </div>
        </div>

        <div onClick={() => handleScroll("#swap")} className="text-black bg-primaryColor border-[3px] border-black rounded-lg p-4 sm:max-w-fit sm:mx-auto break-words sm:break-normal mt-24 cursor-pointer">
          <p className="w-full text-lg sm:text-2xl">
            <b>
              Contract Address: JC1WWYCZEppkGt74p9rkYhQc8Tt1BJLcpssWYUEQpump
            </b>
          </p>
        </div>
      </section>
  )
}

export default Tokenomics