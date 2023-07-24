"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { MuseoModerno } from "next/font/google";
import { useIntersection } from "react-use";
import { gsap, Power3 } from "gsap";
import Link from "next/link";
import useSwitch from "@/hooks/useSwitch";

const museo_moderno = MuseoModerno({
  subsets: ["latin"],
});

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { setFocusSection } = useSwitch();
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const focusHover = (element: any) => {
    gsap.from(element, {
      opacity: 0.5,
      scale: 1,
    });
    gsap.to(element, {
      opacity: 1,
      scale: 1.2,
      duration: 1.5,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const notFocus = (element: any) => {
    gsap.from(element, {
      opacity: 1,
      scale: 1.2,
    });
    gsap.to(element, {
      opacity: 0.5,
      scale: 1,
      duration: 1.5,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  useEffect(() => {
    intersection && intersection.intersectionRatio > 0.1
      ? focusHover("#house-icon")
      : notFocus("#house-icon");
  }, [intersection]);

  return (
    <div
      id="hero-section"
      ref={sectionRef}
      className="snap-start flex justify-center items-center h-auto 2xl:h-screen bg-[#00121f] bg-[url('/assets/hero/bg-skyshare.png')] bg-top bg-fixed bg-no-repeat bg-cover"
    >
      <div className="relative flex flex-col 2xl:flex-row justify-between items-center max-w-[1700px] w-full h-full pt-[5rem] px-[1rem] lg:px-[5.5rem]">
        <div
          className="flex flex-col gap-4 md:gap-8"
          data-aos="fade-up"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
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
          <a href="mailto:management@skysharelabs.com">
            <button className="py-4 px-8 rounded-lg bg-[#0055D5] uppercase font-[clash] text-white font-bold hover:brightness-150 duration-300">
              Send Us An Email
            </button>
            
          </a>
        </div>
        <Image
          src="/assets/hero/rocket-cut.png"
          width={1000}
          height={1000}
          alt="Picture of the author"
          className="relative 2xl:absolute 2xl:bottom-0 2xl:right-0"
          data-aos="fade-up"
          data-aos-offset="500"
          data-aos-delay="200"
          data-aos-duration="1000"
        />
      </div>
    </div>
  );
};

export default HeroSection;
