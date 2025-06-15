import React from "react";

const DonateUs = () => {
  return (
    <section
      id="empower"
      className="w-full px-4 py-8 md:py-24 sm:container mx-auto"
    >
      <div className="flex flex-col gap-12">
        <h2 className="text-textColor text-4xl sm:text-7xl font-semibold text-center">
          Empower
        </h2>

        <p className="text-textColor text-lg sm:text-xl text-center">
        A community donation wallet where people donate POWER tokens and a percentage of those tokens will be donated to the zoo in which the baby white rhino is at and a percentage used for marketing. tokens donated to a wallet and then distributed to MOO-DENG wallets to promote the adoption of the project that way
        </p>

        <div
          className="text-black bg-primaryColor border-[3px] border-black rounded-lg p-4 sm:max-w-fit sm:mx-auto break-words sm:break-normal  cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(
              "5nLQ263W7hZ9Sa1bNCzW4tdFAVDJVmjtTBJcXs3GqVx5"
            );
            document.getElementById("copyMessage")?.classList.remove("hidden");
          }}
        >
          <p className="w-full text-lg text-center sm:text-2xl">
            <b>5nLQ263W7hZ9Sa1bNCzW4tdFAVDJVmjtTBJcXs3GqVx5</b>
          </p>
        </div>
        <p
          id="copyMessage"
          className="w-full text-lg sm:text-2xl text-center text-white hidden"
        >
          Address Copy
        </p>
      </div>
    </section>
  );
};

export default DonateUs;
