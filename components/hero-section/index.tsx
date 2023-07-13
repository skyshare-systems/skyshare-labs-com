import React from "react";
import Image from "next/image";
import { MuseoModerno } from "next/font/google";

const museo_moderno = MuseoModerno({
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center h-auto 2xl:h-screen bg-[#00121f] bg-[url('/assets/hero/bg-skyshare.png')] bg-top bg-fixed bg-no-repeat bg-cover">
      <div className="relative flex flex-col 2xl:flex-row justify-between items-center max-w-[1800px] w-full h-full pt-[5rem] px-[1rem] lg:px-4">
        <div className="flex flex-col gap-4 md:gap-8">
          <h1
            className={`${museo_moderno.className} text-white/75 text-2xl font-semibold`}
          >
            SKYSHARE LABS
          </h1>

          <h1
            className={`${museo_moderno.className} text-white text-3xl md:text-7xl font-semibold`}
          >
            Let’s build together
          </h1>
          <p
            className={`${museo_moderno.className} text-white/75 text-lg md:text-3xl font-normal max-w-[543px]`}
          >
            Transforming ideas into products, bringing your vision to life.
          </p>
          <div>
            <button className="py-4 px-8 rounded-lg bg-[#0055D5] uppercase font-[clash] text-white font-bold hover:brightness-150 duration-300">
              Send Us An Email
            </button>
          </div>
        </div>
        <Image
          src="/assets/hero/rocket-cut.png"
          width={1000}
          height={1000}
          alt="Picture of the author"
          className="relative 2xl:absolute 2xl:bottom-0 2xl:right-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
