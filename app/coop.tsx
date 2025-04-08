import { title, subtitle } from "@/components/primitives";
import React from "react";
import BlurText from "../components/ui/blur-text";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export const Coop = () => {
  return (
    <div className="container mx-auto pt-24 pb-2">
      <div className="text-center ">
        <BlurText
          text="Let's Work Together"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className={title({ class: "mb-6 " })}
        />
      </div>
      <p
        className={subtitle({
          class: "mb-4 font-light text-justify max-w-7xl",
        })}
      >
        Certiweld Pro Indonesia, kami percaya bahwa kolaborasi adalah kunci
        untuk menciptakan dampak yang berkelanjutan. Kami terbuka untuk bekerja
        sama dengan berbagai pihak—industri, institusi pendidikan, lembaga
        pemerintah, maupun organisasi profesional— dalam mengembangkan
        kompetensi tenaga kerja yang unggul, tersertifikasi, dan siap bersaing
        di era global. Mari bersama-sama membangun standar kualitas yang lebih
        tinggi melalui pelatihan, sertifikasi, dan konsultasi teknis yang
        kredibel dan terintegrasi. Hubungi kami hari ini, dan jadilah bagian
        dari ekosistem kemajuan industri pengelasan di Indonesia
      </p>
    </div>
  );
};
