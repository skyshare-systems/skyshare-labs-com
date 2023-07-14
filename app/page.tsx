"use client";
import { useEffect } from "react";

import HeroSection from "@/components/hero-section";
import InfoSection from "@/components/info-section";
import SideBar from "@/components/side-bar-section";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <SideBar />
      <HeroSection />
      <InfoSection />
    </>
  );
}
