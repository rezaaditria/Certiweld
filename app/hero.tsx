import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const images = [
  "/hero/1.jpg",
  "/hero/2.jpg",
  "/hero/3.jpg",
  "/hero/4.jpg",
  "/hero/5.jpg",
];

export default function Hero() {
  return (
    <>
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center "
        >
          <div className="flex justify-center">
            <Image
              src="/logo.jpg"
              alt="CertiWeld Indonesia Logo"
              width={320}
              height={320}
              loading="lazy"
              className="h-40 w-auto md:h-60 lg:h-80 rounded-full border-2 border-primary shadow-lg"
            />
          </div>
        </motion.div>
      </ImagesSlider>
    </>
  );
}
