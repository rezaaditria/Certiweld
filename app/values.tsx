import React from "react";
import Image from "next/image";
import { subtitle, title } from "@/components/primitives";
import { WordRotate } from "../components/magicui/word-rotate";

export default function Values() {
  return (
    <div className="relative w-screen h-auto min-h-[600px] flex items-center justify-center text-white  px-6 py-16 md:py-24 ">
      {/* Background Image */}
      <Image
        src="/hero/2.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 w-full h-full object-cover overflow-hidden"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-85" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl text-center w-full">
        <h1 className={title({ class: "mb-6" })}>The Company Values</h1>

        <div className="grid grid-cols-1 md:grid-cols-4  gap-0 md:gap-16 text-sm md:text-base mt-12">
          <div className="col-span-1  row-span-1 flex items-center justify-center ">
            <h1 className={title({ class: "mb-4" })}>
              <Image
                src="/logo.jpg"
                alt="CertiWeld Pro Indonesia Logo"
                width={320}
                height={320}
                className="rounded-full "
              />
              <span>
                <WordRotate
                  className="text-4xl font-light pt-6 text-center"
                  words={["Certified Skills.", "Trusted Results."]}
                />
              </span>
            </h1>
          </div>

          <div className="col-span-3  row-span-1 flex items-center justify-center">
            <p
              className={subtitle({
                class: "mb-4 text-justify font-extralight text-white",
              })}
            >
              Certiweld Pro Indonesia, kami meyakini bahwa nilai-nilai inti
              adalah fondasi utama dalam menjalankan setiap aspek layanan kami.
              <strong> Kompetensi</strong> menjadi prinsip pertama yang kami
              junjung tinggi. Kami berkomitmen mencetak tenaga kerja profesional
              melalui pelatihan dan sertifikasi yang sesuai standar industri
              nasional maupun internasional. Dalam setiap proses, kami
              menjadikan integritas sebagai landasan—bertindak jujur,
              bertanggung jawab, dan menjaga transparansi dalam hubungan dengan
              mitra, peserta, serta lembaga terkait.
              <br />
              <br />
              Kami mengedepankan <strong>profesionalisme</strong> dalam
              memberikan layanan yang tepat waktu, akurat, dan berkualitas. Tim
              kami bekerja dengan standar tinggi untuk menjamin hasil yang
              optimal bagi setiap klien. Seiring perkembangan teknologi dan
              tuntutan industri, <strong>inovasi</strong> menjadi semangat kami
              untuk terus beradaptasi dan menyempurnakan metode pembelajaran
              serta sistem kerja yang kami jalankan.
              <br />
              <br />
              Certiweld juga menjalin <strong>kolaborasi</strong> strategis
              dengan berbagai pihak—dunia industri, lembaga sertifikasi, hingga
              institusi pendidikan—untuk membangun ekosistem SDM unggul dan
              berkelanjutan. Lebih dari itu, kami menyadari pentingnya
              <strong> kontribusi sosial</strong>, yakni peran aktif dalam
              mendukung peningkatan kompetensi tenaga kerja Indonesia sebagai
              bagian dari pembangunan bangsa.
              <br />
              <br />
              Dengan nilai-nilai tersebut, kami terus melangkah untuk menjadi
              mitra terpercaya dalam pengembangan SDM industri pengelasan dan
              teknik di Indonesia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
