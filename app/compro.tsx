"use client";
import { title, subtitle } from "@/components/primitives";
import React from "react";
import Image from "next/image";

export const Compro = () => {
  return (
    <>
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
          <p
            className={subtitle({
              class: "mb-4 text-justify font-light",
            })}
          >
            Certiweld Pro Indonesia adalah perusahaan terkemuka yang menyediakan
            layanan lengkap dalam bidang pelatihan, sertifikasi, inspeksi, dan
            konsultasi pengelasan. Dengan tim ahli yang berpengalaman dan
            bersertifikasi internasional, kami berkomitmen untuk memastikan
            setiap klien mendapatkan kualitas terbaik dalam pengelasan, baik
            dalam proses sertifikasi maupun layanan pengelasan itu sendiri.
            <br />
            <br />
            <span>
              Kami percaya bahwa pengelasan yang presisi dan berkualitas adalah
              fondasi bagi proyek yang kuat dan tahan lama. Oleh karena itu,
              Certiweld Pro Indonesia berfokus pada peningkatan keahlian tenaga
              pengelas melalui pelatihan dan sertifikasi yang diakui secara
              global, memastikan setiap profesional yang kami sertifikasi siap
              menghadapi tantangan industri modern.
            </span>
          </p>
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 flex items-center justify-center">
          <p
            className={subtitle({
              class: "mb-4 text-justify font-light",
            })}
          >
            Selain itu, kami juga menawarkan layanan konsultasi dan inspeksi
            pengelasan untuk memastikan standar keselamatan dan kualitas
            tertinggi dipenuhi di setiap proyek, dari tahap fabrikasi hingga
            penyelesaian. Dalam setiap aspek pekerjaan kami, transparansi,
            keandalan, dan inovasi menjadi pilar utama yang kami jaga.
            <br />
            <br />
            <span>
              Dengan Certiweld Pro Indonesia, Anda mendapatkan mitra yang tidak
              hanya memastikan sertifikasi, tetapi juga komitmen terhadap
              kualitas, keamanan, dan keberlanjutan dalam setiap proyek
              pengelasan yang Anda jalankan.
            </span>
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
      </div>
    </>
  );
};
