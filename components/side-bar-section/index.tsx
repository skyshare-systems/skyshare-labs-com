import React from "react";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="fixed right-5 left-auto md:right-auto md:left-10 flex justify-center items-center z-[9999] h-screen">
      <div className="flex flex-col gap-8">
        <a href={"#hero-section"}>
          <Image
            src="/icons/house-solid.svg"
            width={30}
            height={30}
            alt="house"
            id="house-icon"
          />
        </a>

        <a href={"#info-section"}>
          <Image
            src="/icons/circle-info-solid.svg"
            width={30}
            height={30}
            alt="info"
            id="info-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
