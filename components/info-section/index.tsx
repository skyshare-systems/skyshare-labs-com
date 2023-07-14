"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MuseoModerno } from "next/font/google";
import { useIntersection } from "react-use";
import { gsap, Power3 } from "gsap";
import Link from "next/link";

import Image from "next/image";
import { data_experience, data_services } from "@/utils/json/json-data";
import useSwitch from "@/hooks/useSwitch";

const museo_moderno = MuseoModerno({
  subsets: ["latin"],
});

const InfoSection = () => {
  const { name, title, setName, setTitle, setFocusSection } = useSwitch();
  const sectionRef = useRef(null);

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

  const animation = () => {
    focusHover("#info-icon");
  };

  useEffect(() => {
    intersection && intersection.intersectionRatio > 0.1
      ? animation()
      : notFocus("#info-icon");
  }, [intersection]);

  return (
    <div
      ref={sectionRef}
      className="snap-start flex justify-center items-center py-[10rem] h-auto bg-[#001a29] bg-[url('/assets/info/noise-bg.png')] bg-top bg-fixed bg-no-repeat bg-cover"
    >
      <div
        className="flex flex-col gap-8 justify-center items-center w-full max-w-[1400px] px-[1rem] 2xl:px-4 "
        id="info-section"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 self-stretch">
          <div
            className="flex flex-col p-8 h-auto lg:h-full w-full lg:max-w-[450px] lg:max-h-[316px] bg-[#002133] rounded-2xl gap-4"
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="1000"
          >
            <p className="font-[clash] text-2xl text-white/70">
              Your trusted partner for innovative blockchain solutions. We bring
              your vision to life in the evolving world of blockchain
              technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col">
                <h1
                  className={`${museo_moderno.className} text-white text-3xl font-bold`}
                >
                  3+
                </h1>
                <p className="font-[clash] text-white/70 text-base">
                  Years of experience
                </p>
              </div>
              <div className="flex flex-col">
                <h1
                  className={`${museo_moderno.className} text-white text-3xl font-bold`}
                >
                  30+
                </h1>
                <p className="font-[clash] text-white/70 text-base">
                  Successful Projects
                </p>
              </div>
            </div>
            <div
              className={`${museo_moderno.className} flex gap-2 justify-end items-center grow text-[#00A3FF]`}
            >
              <p>Let's shape the decentralized future together</p>
              <Image
                src="/icons/proceed.svg"
                width={15}
                height={15}
                alt="proceed"
              />
            </div>
          </div>
          <div
            className="flex flex-col p-8 h-full lg:h-screen w-full border-2 border-[#00304b] rounded-2xl lg:max-h-[316px] gap-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="flex flex-wrap items-center gap-4 justify-evenly p-4">
              {data_experience.map((data, index) => {
                return (
                  <button key={index} onClick={() => setName(data.title)}>
                    <Image
                      src={data.imgUrl}
                      width={45}
                      height={45}
                      alt={data.title}
                      className={`${
                        name === data.title
                          ? "grayscale-0 opacity-100"
                          : "grayscale opacity-50"
                      } hover:grayscale-0 hover:opacity-100 duration-300`}
                    />
                  </button>
                );
              })}
            </div>
            {data_experience
              .filter((datafilter) => {
                return datafilter.title === name;
              })
              .map((data, index) => {
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <h1 className="font-[clash] text-2xl text-white font-medium">
                      {data.title}
                    </h1>
                    <p className="font-[clash] text-white/70 text-base">
                      {data.description_one}
                    </p>
                    <p className="font-[clash] text-white/70 text-base">
                      {data.description_two}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="flex flex-col 2xl:flex-row justify-evenly items-center gap-8 w-full h-full">
          <div
            className="flex flex-col justify-between w-full h-full border-2 border-[#00304b] rounded-2xl max-h-[600px] 2xl:max-h-[316px] p-8 gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <h1
              className={`${museo_moderno.className} text-white text-3xl font-bold`}
            >
              Services
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
              {data_services.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row w-full max-w-[280px] items-center justify-between p-4 gap-8 rounded-lg hover:bg-[#002133] duration-300 cursor-pointer"
                  >
                    <Link
                      href={data.emailUrl}
                      className="flex flex-row gap-4 items-center"
                      onMouseEnter={() => setTitle(data.title)}
                      onMouseLeave={() => setTitle("")}
                    >
                      <Image
                        src={data.imgUrl}
                        alt="pm"
                        height={35}
                        width={35}
                      />

                      <div className="flex flex-col">
                        <h1 className="font-[clash] text-2xl text-white font-semibold">
                          {data.title}
                        </h1>
                        <h1 className="font-[clash] text-2xl text-white/70 font-normal">
                          {data.subTitle}
                        </h1>
                      </div>
                    </Link>

                    <Image
                      src={"/icons/click-icon.svg"}
                      alt="pm"
                      height={20}
                      width={20}
                      className={`${
                        data.title === title ? "hidden sm:flex" : "hidden"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="flex flex-col justify-center w-full h-full 2xl:h-screen grow bg-[#002133] sm:min-h-[316px] 2xl:max-h-[316px] rounded-2xl p-8 gap-8"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <h1
              className={`${museo_moderno.className} text-white text-2xl font-semibold`}
            >
              Unlock blockchain potential with SkyShare Labs, shape the
              decentralized future!
            </h1>
            <Link href="mailto:quickraven@skysharelabs.com">
              <button className="py-4 px-8 rounded-lg bg-[#0055D5] uppercase font-[clash] text-white font-bold hover:brightness-150 duration-300">
                Send Us An Email
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col 2xl:flex-row w-full gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1000"
            className="flex flex-col items-center sm:flex-row justify-center p-8 h-auto lg:h-full w-full 2xl:max-w-[450px] lg:min-h-[250px] lg:max-h-[250px] bg-[#002133] rounded-2xl gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Image
                src={"/icons/logo-icon.svg"}
                alt="skyshare"
                height={100}
                width={100}
              />
              <Image
                src={"/icons/text.svg"}
                alt="skyshare"
                height={200}
                width={200}
              />
            </motion.div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
            className="flex flex-wrap items-center justify-center sm:justify-evenly p-8 h-full w-full border-2 border-[#00304b] rounded-2xl lg:min-h-[250px] lg:max-h-[250px] gap-8"
          >
            <h1
              className={`${museo_moderno.className} max-w-[127px] text-center text-3xl font-bold text-white`}
            >
              Notable Clients
            </h1>

            <div className="flex flex-wrap justify-evenly items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`h-[75px] w-[75px]  bg-[url('/assets/clients/hfc.png')] hover:bg-[url('/assets/clients/onhover/hfc.png')] bg-center bg-contain duration-75 max-w-[75px] max-h-[75px] bg-no-repeat`}
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`h-[75px] w-[75px]  bg-[url('/assets/clients/lab.png')] hover:bg-[url('/assets/clients/onhover/lab.png')] bg-center bg-contain duration-75 max-w-[75px] max-h-[75px] bg-no-repeat`}
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`h-[75px] w-[75px]  bg-[url('/assets/clients/ths.png')] hover:bg-[url('/assets/clients/onhover/ths.png')] bg-center bg-contain duration-75 max-w-[75px] max-h-[75px] bg-no-repeat`}
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`h-[75px] w-[75px]  bg-[url('/assets/clients/crabbit.png')] hover:bg-[url('/assets/clients/onhover/crabbit.png')] bg-center bg-contain duration-75 max-w-[75px] max-h-[75px] bg-no-repeat`}
              />

              <p className="text-[#00A3FF]">and many more!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
