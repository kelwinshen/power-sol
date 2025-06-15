"use client";

import { useState } from "react";
import NavigationMenus from "@/components/NavigationMenus";
import HeaderImage from "@/components/HeaderImage";
import AboutPower from "@/components/AboutPower";
import FullImage1 from "@/components/FullImage1";
import FullImage2 from "@/components/FullImage2";
import HowtoBuy from "@/components/HowtoBuy";
import FullImage3 from "@/components/FullImage3";
import Tokenomics from "@/components/Tokenomics";
import FooterSections from "@/components/FooterSections";
import RoadMap from "@/components/RoadMap";
import MemeGallery from "@/components/MemeGallery";
import TwitterPower from "@/components/TwitterPower";
import DonateUs from "@/components/DonateUs";
import Slogan from "@/components/Slogan";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <NavigationMenus isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeaderImage />
      <AboutPower />
      <FullImage1 />
      <TwitterPower />
      <FullImage2 />
      <HowtoBuy />
      <hr className="h-24 border-none md:h-32" />
      <FullImage3 />
      <Tokenomics />
      <RoadMap />
      <Slogan />
      <MemeGallery />
      <DonateUs />
      <FooterSections />
    </>
  );
}
