import { coingeckoIcon, dexIcon, dexToolIcon, teleIcon, xIcon } from "../assets";
import Image from "next/image";
import React from "react";

const FooterSections = () => {
  return (
    <section className="w-full bg-white border-t-[3px] border-black">
      <div className="flex flex-col gap-4 py-8 md:py-4 md:flex-row md:justify-between md:items-center container mx-auto">
        <h2 className="text-black text-4xl sm:text-7xl font-semibold text-center">
          $POWER
        </h2>

        <div className="flex flex-row gap-4 justify-center">
          <a
            href="https://t.me/PowerRhinoCTO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cursor-pointer bg-primaryColor border-[3px] border-black rounded-full p-4">
              <Image src={teleIcon} alt="Telegram Icon" className="w-5 h-5" />
            </div>
          </a>

          <a
            href="https://x.com/PowerRhinoCTO/status/1859328695258972541"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cursor-pointer bg-primaryColor border-[3px] border-black rounded-full p-4">
              <Image src={xIcon} alt="X Icon" className="w-5 h-5" />
            </div>
          </a>

          <a
            href="https://dexscreener.com/solana/JC1WWYCZEppkGt74p9rkYhQc8Tt1BJLcpssWYUEQpump"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cursor-pointer bg-primaryColor border-[3px] border-black rounded-full p-4">
              <Image src={dexIcon} alt="Dex Icon" className="w-5 h-5" />
            </div>
          </a>

          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/EUyiDqYcvjhGrLQ8fTHzJeiMh979v2kiaMxGNkN7Wy55"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cursor-pointer bg-primaryColor border-[3px] border-black rounded-full p-4">
              <Image
                src={dexToolIcon}
                alt="Dextools Icon"
                className="w-5 h-5"
              />
            </div>
          </a>

          <a
            href="https://www.coingecko.com/id/koin_koin/power-the-baby-white-rhino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cursor-pointer bg-primaryColor border-[3px] border-black rounded-full p-4">
              <Image src={coingeckoIcon} alt="Coin Gecko" className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterSections;
