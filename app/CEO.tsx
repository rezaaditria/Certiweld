import React from "react";
import Image from "next/image";
import { subtitle, title } from "@/components/primitives";

export const Ceo = () => {
  return (
    <>
      <div className="py-8 text-center">
        <h1 className={title({ class: "mb-4" })}>CEO Message</h1>
      </div>
      <div
        id="about"
        className="pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-auto gap-y-12 gap-x-8 sm:gap-y-8 sm:gap-x-4 md:gap-y-10 md:gap-x-6 lg:gap-y-32 lg:gap-x-8 max-w-screen text-center"
      >
        <div className="col-span-1 sm:col-span-1 lg:col-span-2 row-span-1 flex flex-col items-center justify-center">
          <Image
            src="/hero/CEO.png"
            alt="CertiWeld Indonesia Logo"
            width={320}
            height={320}
            loading="lazy"
            className="h-64 w-auto sm:h-48 md:h-60 lg:h-80 rounded-br-3xl "
          />
          <span className="text-center mt-4">
            {" "}
            {/* Tambahkan margin-top untuk jarak */}
            <h1 className="text-3xl font-extrabold leading-none">
              DIWAN ALI, S.T , IWIP
            </h1>
            <p className="text-md font-extralight text-start">
              CEO Certiweld Pro Indonesia
            </p>
          </span>
          <div></div>
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 flex items-center justify-center">
          <p
            className={subtitle({
              class: "mb-4 text-justify font-light",
            })}
          >
            Sebagai CEO Certiweld Pro Indonesia, saya percaya bahwa kualitas
            sumber daya manusia adalah fondasi utama dalam membangun industri
            yang tangguh dan berdaya saing. Di tengah dinamika global dan
            tuntutan sertifikasi kompetensi yang semakin tinggi, kehadiran
            layanan pelatihan dan sertitikasi yang kredibel menjadi
            kebutuhan strategis.
            <br />
            <br />
            <span>
              Certiweld Pro Indonesia didirikan dengan semangat untuk menjawab
              tantangan tersebut.
            </span>
            <br />
            <br />
            <span>
              Kami berkomitmen menyediakan solusi pelatihan dan sertifikasi
              pengelasan yang terstandarisasi, adaptif terhadap perkembangan
              teknologi, dan relevan dengan kebutuhan industri saat ini.
            </span>
            <span>
              Melalui kolaborasi dengan berbagai pihak—baik lembaga nasional,
              institusi pendidikan, maupun pelaku industri—kami terus memperkuat
              peran sebagai mitra pengembangan Sumber Daya Manusia (SDM)
              profesional di bidang pengelasan.
            </span>
            <br />
            <br />
            <span>
              Kami percaya bahwa masa depan industri ada di tangan tenaga kerja
              yang kompeten. Certiweld Pro Indonesia hadir untuk memastikan
              mereka siap.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
