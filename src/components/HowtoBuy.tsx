import Link from "next/link";
import React from "react";

const HowtoBuy = () => {
  return (
    <section id="howtobuy" className="w-full px-4 py-8 md:py-24 2xl:container 2xl:mx-auto ">
      <h2 className="text-textColor text-4xl sm:text-7xl font-semibold text-center">
        How to Buy
      </h2>
      <hr className="h-8 border-none md:h-12" />
      <div className="flex flex-col md:flex-wrap md:flex-row gap-8  md:mx-auto md:justify-center">
        <div className="md:w-[300px] bg-primaryColor border-[3px] border-black rounded-lg px-8 py-5 flex flex-col gap-3">
          <h2 className="text-3xl">1) Create Wallet</h2>
          <p className="text-lg">
            Go to <Link href={`https://phantom.app/`} className="text-blue-500" target="_blank" rel="noopener noreferrer">phantom.app</Link> and follow the straightforward steps to set up a
            new account using the Phantom app or browser extension.
          </p>
        </div>
        <div className="md:w-[300px] bg-primaryColor border-[3px] border-black rounded-lg px-8 py-5 flex flex-col gap-3">
          <h2 className="text-3xl">2) Get $SOL</h2>
          <p className="text-lg">
            Tap the BUY button in the app to purchase Solana, or transfer $SOL
            to your Phantom wallet from your preferred crypto exchange.
          </p>
        </div>
        <div className="md:w-[300px] bg-primaryColor border-[3px] border-black rounded-lg px-8 py-5 flex flex-col gap-3">
          <h2 className="text-3xl">3) Swap $SOL for $Power</h2>
          <p className="text-lg">
            Tap the SWAP icon in your Phantom wallet and paste the $Power token
            address. Swap your $SOL for $Power.
          </p>
        </div>
        <div className="md:w-[300px] bg-primaryColor border-[3px] border-black rounded-lg px-8 py-5 flex flex-col gap-3">
          <h2 className="text-3xl">4) You&apos;re Power-gang!</h2>
          <p className="text-lg">Pack it up, Power it up!</p>
        </div>
      </div>

      <hr className="h-24 border-none md:h-32" />
      <h2 className="text-textColor text-4xl sm:text-7xl font-semibold text-center">
        SWAP on Jupiter
      </h2>
      <hr className="h-12 border-none md:h-12" />
      <iframe
        id="swap"
        src="https://jup.ag/swap/SOL-JC1WWYCZEppkGt74p9rkYhQc8Tt1BJLcpssWYUEQpump?referrer=GAdGcU2EsdafcWGkxwTRjcTTF8FmkvtuQJ99Vv1wxKFz&feeBps=10"
        height="660px"
        width="100%"
        className="border-[3px] border-black m-auto block rounded-lg max-w-[960px] min-w-[300px]"
      />
    </section>
  );
};

export default HowtoBuy;
