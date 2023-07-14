import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SideBar = () => {
  return (
    <div className="fixed right-5 left-auto md:right-auto md:left-10 flex justify-center items-center z-[9999] h-screen">
      <div className="flex flex-col gap-8">
        <motion.a
          href={"#hero-section"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src="/icons/house-solid.svg"
            width={30}
            height={30}
            alt="house"
            id="house-icon"
          />
        </motion.a>

        <motion.a
          href={"#info-section"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src="/icons/circle-info-solid.svg"
            width={30}
            height={30}
            alt="info"
            id="info-icon"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default SideBar;
