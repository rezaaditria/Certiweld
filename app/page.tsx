"use client";
import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { ImagesSlider } from "@/components/ui/images-slider";
import CountUp from "@/components/total";
import { AnimatedTestimonialsDemo } from "@/components/testi";
import { WeldingServices } from "@/components/WeldingServices";
import { Certification } from "@/components/Certification";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { InstagramIcon } from "@/components/icons";

const images = [
  "/hero/1.jpg",
  "/hero/2.jpg",
  "/hero/3.jpg",
  "/hero/4.jpg",
  "/hero/5.jpg",
];

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col items-center justify-center gap-8 "
      >
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
            className="z-50 flex flex-col justify-center items-center "
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
        <div
          id="about"
          className="py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-auto gap-y-12 gap-x-8 sm:gap-y-8 sm:gap-x-4 md:gap-y-10 md:gap-x-6 lg:gap-y-32 lg:gap-x-8 max-w-screen text-center"
        >
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 flex items-center justify-center ">
            <h1 className={title({ class: "mb-4" })}>
              <Image
                src="/logo.jpg"
                alt="CertiWeld Pro Indonesia Logo"
                width={320}
                height={320}
                className="h-64 w-auto sm:h-48 md:h-60 lg:h-80 rounded-full "
              />
            </h1>
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 flex items-center justify-center">
            <p className={subtitle({ class: "mb-4 text-justify" })}>
              <em>Certiweld Pro Indonesia</em> adalah perusahaan terkemuka yang
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
              <em>CertiWeld Pro Indonesia</em> berfokus pada peningkatan
              keahlian tenaga pengelas melalui pelatihan dan sertifikasi yang
              diakui secara global, memastikan setiap profesional yang kami
              sertifikasi siap menghadapi tantangan industri modern.
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

        <section
          id="works"
          className="flex flex-col items-center justify-center gap-8 w-full max-w-7xl mx-auto"
        >
          <div>
            <div className="py-24 text-center">
              <div className="flex justify-center">
                <div className="px-2 py-1 my-2 text-xs font-semibold text-black bg-gray-300 rounded-full">
                  Works
                </div>
              </div>
              <h1 className={`${title()}`}>Welding Services</h1>
            </div>
            <WeldingServices />
          </div>

          <div>
            <div className="pt-24 pb-16 text-center">
              <h1 className={title()}>Welding Training & Certification</h1>
            </div>
            <Certification />
          </div>
        </section>

        <section id="contact">
          <div className="pt-24 pb-8 text-center">
            <h1 className={title()}>Contact</h1>
          </div>
          <div className="py-12 flex flex-col md:flex-row items-center gap-8 my-12 p-6  bg-gradient-to-l from-gray-100 from-50%  via-gray-100 via-98% to-transparent to-99%  rounded-3xl shadow-input">
            <div className="w-full md:w-1/2">
              <iframe
                title="Our Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.87343437022543!2d107.03562565459242!3d-6.267024767194945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e4150e00b75%3A0x1cbc8fdb87c6203c!2sGrand%20Kalimas%2C%20Jl.%20Inspeksi%20Kalimalang%20ruko%20No.a19%2C%20Tambun%2C%20Kec.%20Tambun%20Sel.%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat%2017510!5e0!3m2!1sen!2sid!4v1744030023982!5m2!1sen!2sid"
                width="100%"
                height="300"
                className="border-0 rounded-2xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Visit Our Office
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our office is located at:
              </p>
              <p className="text-lg text-gray-800 font-medium mt-2">
                RUKO GRAND KALIMAS, JALAN KYAI H NOER ALI INSPEKSI KALIMALANG
                A-20 NOMOR 20, Desa/Kelurahan Jatimulya, Kec. Tambun Selatan,
                Kab. Bekasi, Provinsi Jawa Barat. 17510
              </p>
              <div className="py-6 flex flex-col items-center md:items-start gap-2">
                <span className="text-gray-600 text-sm mb-1">
                  Follow us on Instagram
                </span>
                <Link
                  aria-label="Instagram"
                  href={siteConfig.links.insta}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center gap-2"
                >
                  <InstagramIcon className="text-white" />
                  <span className="font-medium">@certiweld</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <div className="flex gap-3 mt-6"></div>
      </section>
    </>
  );
}
