"use client";

import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { ImagesSlider } from "@/components/ui/images-slider";
import { BentoGridDemo } from "@/components/bento";
import CountUp from "@/components/total";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { AnimatedTestimonialsDemo } from "@/components/testi";

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
        <div className="py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-auto gap-y-12 gap-x-8 sm:gap-y-8 sm:gap-x-4 md:gap-y-10 md:gap-x-6 lg:gap-y-32 lg:gap-x-8 max-w-screen text-center">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 flex items-center justify-center ">
            <h1 className={title({ class: "mb-4" })}>
              <Image
                src="/logo.jpg"
                alt="CertiWeld Indonesia Logo"
                width={320}
                height={320}
                className="h-64 w-auto sm:h-48 md:h-60 lg:h-80 rounded-full "
              />
            </h1>
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 flex items-center justify-center">
            <p className={subtitle({ class: "mb-4 text-justify" })}>
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
            <p className={subtitle({ class: "mb-4 text-justify" })}>
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
              src="/hero/2.jpg"
              alt="CertiWeld Indonesia Logo"
              width={320}
              height={320}
              className="h-64 w-auto sm:h-48 md:h-60 lg:h-80 rounded-xl shadow-lg"
            />
          </div>

          <div className="col-span-1 sm:col-span-1 lg:col-span-2 row-span-1 flex items-center justify-center">
            <Image
              src="/hero/3.jpg"
              alt="CertiWeld Indonesia Logo"
              width={320}
              height={320}
              className="h-64 w-auto sm:h-48 md:h-60 lg:h-80 rounded-xl shadow-lg"
            />
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 flex items-center justify-center">
            <p className={subtitle({ class: "mb-4 text-justify" })}>
              Dengan <em>CertiWeld Indonesia</em>, Anda mendapatkan mitra yang
              tidak hanya memastikan sertifikasi, tetapi juga{" "}
              <strong>
                komitmen terhadap kualitas, keamanan, dan keberlanjutan
              </strong>{" "}
              dalam setiap proyek pengelasan yang Anda jalankan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 pb-24 gap-y-4 sm:gap-x-2">
          <div className="text-5xl sm:text-6xl font-semibold col-span-1 sm:col-span-2 flex items-center justify-center">
            Lebih dari
          </div>
          <div className="col-span-1 sm:col-start-3 flex items-center justify-center">
            <CountUp
              from={0}
              to={50}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text font-bold text-5xl sm:text-6xl bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent"
              startWhen={true}
            />
          </div>
          <div className="text-5xl sm:text-6xl font-semibold col-span-1 sm:col-start-4 flex items-center justify-center">
            clients
          </div>
        </div>

        <div>
          <AnimatedTestimonialsDemo />
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
