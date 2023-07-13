import HeroSection from "@/components/hero-section";
import InfoSection from "@/components/info-section";
import SideBar from "@/components/side-bar-section";

export default function Home() {
  return (
    <>
      <SideBar />
      <main>
        <HeroSection />
        <InfoSection />
      </main>
    </>
  );
}
