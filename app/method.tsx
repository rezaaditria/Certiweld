import React from "react";
import Image from "next/image";
import { title } from "@/components/primitives";

export default function Method() {
  return (
    <div className="relative w-screen h-auto min-h-[600px] flex items-center justify-center text-white px-6 py-16 md:py-24 ">
      {/* Background Image */}
      <Image
        src="/hero/3.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 w-full h-full object-cover overflow-hidden"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl text-center w-full">
        <h1 className={title({ class: "mb-6" })}>How We Work</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-16 text-sm md:text-base mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl py-4">{step.icon}</span>
              <p className="text-lg font-semibold text-center max-w-xs">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5 5v14h14V5zm4 12H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z"
          opacity="0.3"
        />
        <path
          fill="currentColor"
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"
        />
      </svg>
    ),
    label: "Assessment Kebutuhan",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.25 1a.75.75 0 0 1 .75.75V3h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2V1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 .75-.75M2.5 7.5v6h11v-6zm0-1.5h11V4.5h-11zm7.78 2.97a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-1.25-1.25a.75.75 0 1 1 1.06-1.06l.72.72l1.72-1.72a.75.75 0 0 1 1.06 0"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "Perencanaan Program",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="M10.386 9.836a2.5 2.5 0 1 1 3.611.667C15.212 11.173 16 12.46 16 14v1.5a.5.5 0 1 1-1 0V14c0-1.724-1.276-3-3-3c-.91 0-1.298-.02-1.805-.122c-1.25-.254-2.333-1-3.585-2.566a.5.5 0 1 1 .78-.624c.9 1.124 1.653 1.74 2.434 2.043c.155.052.345.083.562.105m1.785.128q.125.015.251.034L12.5 10a1.5 1.5 0 1 0-.33-.036M9.78 11.97a.5.5 0 0 1 .5.5a1 1 0 0 1-.05.231c-.179.38-.23.774-.23 1.302v1.5a.5.5 0 1 1-1 0v-1.5c0-.657.072-1.186.307-1.696a.5.5 0 0 1 .473-.337M5.958 5.772a.5.5 0 0 1-.78.625L3.11 3.812a.5.5 0 1 1 .78-.624zM1 11h5.5a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5V.5A.5.5 0 0 1 .5 0h12a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0V1H1z"
        />
      </svg>
    ),
    label: "Pelaksanaan Pelatihan dan Sertifikasi",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 16 16"
      >
        <g fill="currentColor">
          <path d="m4.5 1l-.5.5v1.527a4.6 4.6 0 0 1 1 0V2h9v5h-1.707L11 8.293V7H8.973a4.6 4.6 0 0 1 0 1H10v1.5l.854.354L12.707 8H14.5l.5-.5v-6l-.5-.5z" />
          <path
            fillRule="evenodd"
            d="M6.417 10.429a3.5 3.5 0 1 0-3.834 0A4.5 4.5 0 0 0 0 14.5v.5h1v-.5a3.502 3.502 0 0 1 7 0v.5h1v-.5a4.5 4.5 0 0 0-2.583-4.071M4.5 10a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ),
    label: "Evaluasi dan Umpan Balik",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path
            d="M224 56v34.06a44 44 0 1 0-56 67.88V192H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
            opacity="0.2"
          />
          <path d="M128 136a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-8-40H72a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m112 65.47V224a8 8 0 0 1-12 7l-24-13.74L172 231a8 8 0 0 1-12-7v-24H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v30.53a51.88 51.88 0 0 1 0 74.94M160 184v-22.53A52 52 0 0 1 216 76V56H40v128Zm56-12a51.88 51.88 0 0 1-40 0v38.22l16-9.16a8 8 0 0 1 7.94 0l16 9.16Zm16-48a36 36 0 1 0-36 36a36 36 0 0 0 36-36" />
        </g>
      </svg>
    ),
    label: "Penerbitan Sertifikat",
  },
];
