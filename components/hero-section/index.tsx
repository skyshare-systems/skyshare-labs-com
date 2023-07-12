import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-[url('/assets/hero/bg-skyshare.png')] bg-top bg-fixed bg-no-repeat bg-cover">
      <Image
        src="/assets/hero/rocket-skyshare.png"
        width={1100}
        height={1100}
        alt="Picture of the author"
        className="absolute bottom-0 right-0"
      />
    </div>
  );
};

export default HeroSection;
