import { power2 } from "../assets";
import Image from "next/image";
import React from "react";

const FullImage1 = () => {
  return (
    <section className="w-full">
      <Image src={power2} alt="power2" className="w-full h-auto" />
    </section>
  );
};

export default FullImage1;
