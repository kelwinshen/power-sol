import { power4 } from "../assets";
import Image from "next/image";
import React from "react";

const FullImage3 = () => {
  return (
    <section className="w-full">
      <Image src={power4} alt="power4" className="w-full h-auto" />
    </section>
  );
};

export default FullImage3;
