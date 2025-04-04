"use client";

import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { ImagesSlider } from "@/components/ui/images-slider";
import { BentoGridDemo } from "@/components/bento";

const images = ["/hero/1.jpg", "/hero/2.jpg", "/hero/3.jpg"];

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-8 ">
        {/* Logo Section */}
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
            className="z-50 flex flex-col justify-center items-center"
          >
            <div className="flex justify-center">
              <Image
                src="/logo.jpg"
                alt="CertiWeld Indonesia Logo"
                width={320}
                height={320}
                className="h-40 w-auto md:h-60 lg:h-80 rounded-full border-2 border-primary shadow-lg"
              />
            </div>
          </motion.div>
        </ImagesSlider>

        {/* Company Profile Section */}
        <div className="py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-auto gap-4 md:gap-6 lg:gap-8 max-w-screen text-center">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 flex items-center justify-center">
            <h1 className={title({ class: "mb-4" })}>
              <Image
                src="/logo.jpg"
                alt="CertiWeld Indonesia Logo"
                width={320}
                height={320}
                className="h-32 w-auto sm:h-40 md:h-60 lg:h-80 rounded-full border-2 border-primary shadow-lg"
              />
            </h1>
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 flex items-center justify-center">
            <p className={subtitle({ class: "mb-4 text-left" })}>
              <em>CertiWeld Indonesia</em> adalah perusahaan terkemuka yang
              menyediakan layanan lengkap dalam bidang{" "}
              <strong>
                pelatihan, sertifikasi, inspeksi, dan konsultasi pengelasan
              </strong>
              . Dengan tim ahli yang berpengalaman dan bersertifikasi
              internasional, kami berkomitmen untuk memastikan setiap klien
              mendapatkan <strong>kualitas terbaik dalam pengelasan</strong>,
              baik dalam proses sertifikasi maupun layanan pengelasan itu
              sendiri.
            </p>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 flex items-center justify-center">
            <p className={subtitle({ class: "mb-4 text-right" })}>
              Kami percaya bahwa pengelasan yang presisi dan berkualitas adalah
              fondasi bagi proyek yang kuat dan tahan lama. Oleh karena itu,{" "}
              <em>CertiWeld Indonesia</em> berfokus pada peningkatan keahlian
              tenaga pengelas melalui pelatihan dan sertifikasi yang diakui
              secara global, memastikan setiap profesional yang kami sertifikasi
              siap menghadapi tantangan industri modern.
            </p>
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 flex items-center justify-center">
            <Image
              src="/logo.jpg"
              alt="CertiWeld Indonesia Logo"
              width={320}
              height={320}
              className="h-32 w-auto sm:h-40 md:h-60 lg:h-80 rounded-full border-2 border-primary shadow-lg"
            />
          </div>

          <div className="col-span-1 sm:col-span-1 lg:col-span-2 row-span-1 flex items-center justify-center">
            <Image
              src="/logo.jpg"
              alt="CertiWeld Indonesia Logo"
              width={320}
              height={320}
              className="h-32 w-auto sm:h-40 md:h-60 lg:h-80 rounded-full border-2 border-primary shadow-lg"
            />
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 flex items-center justify-center">
            <p className={subtitle({ class: "mb-4 text-left" })}>
              Dengan <em>CertiWeld Indonesia</em>, Anda mendapatkan mitra yang
              tidak hanya memastikan sertifikasi, tetapi juga{" "}
              <strong>
                komitmen terhadap kualitas, keamanan, dan keberlanjutan
              </strong>{" "}
              dalam setiap proyek pengelasan yang Anda jalankan.
            </p>
          </div>
        </div>

        <div>
          <BentoGridDemo />
        </div>

        {/* Call-to-Action Section */}
        <div className="flex gap-3 mt-6"></div>
      </section>
    </>
  );
}
