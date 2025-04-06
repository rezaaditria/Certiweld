import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

export function Certification() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-1" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const YearBadge = ({ year }: { year: number }) => (
  <span className="inline-block px-2 py-1 text-xs font-semibold text-black bg-gray-300 rounded-full">
    {year}
  </span>
);

const Year2021 = () => <YearBadge year={2021} />;
const Year2022 = () => <YearBadge year={2022} />;
const Year2023 = () => <YearBadge year={2023} />;
const Year2024 = () => <YearBadge year={2024} />;
const Year2025 = () => <YearBadge year={2025} />;

const Mitsubishi = () => (
  <video
    src="/work/mitsubisi.mp4"
    className="object-cover object-center rounded-xl w-full h-full min-h-[6rem]"
    autoPlay
    muted
    loop
  ></video>
);

const IntanCahaya = () => (
  <video
    src="/work/PTIntan.mp4"
    className="object-cover object-center rounded-xl w-full h-full min-h-[6rem]"
    autoPlay
    muted
    loop
  ></video>
);

const Krama = () => (
  <video
    src="/work/PTKrama.mp4"
    className="object-cover object-center rounded-xl w-full h-full min-h-[6rem]"
    autoPlay
    muted
    loop
  ></video>
);
const Hino = () => (
  <video
    src="/work/PTHino.mp4"
    className="object-cover object-center rounded-xl w-full h-full min-h-[6rem]"
    autoPlay
    muted
    loop
  ></video>
);

const PemdaBekasi = () => (
  <Image
    src="/work/pemdaBekasi.png"
    alt="Pemda Bekasi"
    width={1600}
    height={900}
    className="object-cover object-top rounded-xl w-full h-full"
  />
);
const BLKmandiri = () => (
  <Image
    src="/work/disnakerJabar.png"
    alt="Pemda Bekasi"
    width={1600}
    height={900}
    className="object-cover object-top rounded-xl w-full h-full"
  />
);
const BLKNon = () => (
  <Image
    src="/work/BLKNONboarding.png"
    alt="Pemda Bekasi"
    width={1600}
    height={900}
    className="object-cover object-top rounded-xl w-full h-full"
  />
);
const BLKBoarding = () => (
  <Image
    src="/work/BLKboarding.png"
    alt="Pemda Bekasi"
    width={1600}
    height={900}
    className="object-cover object-top rounded-xl w-full h-full"
  />
);
const Lapas = () => (
  <Image
    src="/work/lapasBekasi.png"
    alt="Pemda Bekasi"
    width={1600}
    height={900}
    className="object-cover object-top rounded-xl w-full h-full"
  />
);

const items = [
  {
    title: "PT. Mitsubishi Krama Yudha Motors and Manufacturing",
    description: "Welding Training and Certification",
    header: <Mitsubishi />,
    icon: <Year2024 />,
  },
  {
    title: "PT. INTAN CAHAYA MANDIRI",
    description: "Welding Training and Certification",
    header: <IntanCahaya />,
    icon: <Year2024 />,
  },
  {
    title: "PT. KRAMA YUDHA RATU MOTOR",
    description: "Welding Training and Certification",
    header: <Krama />,
    icon: <Year2024 />,
  },
  {
    title: "PEMDA KOTA BEKASI",
    description: "Welding Training and Certification",
    header: <PemdaBekasi />,
    icon: <Year2024 />,
  },
  {
    title: "BLK KOMPETENSI - BOARDING",
    description: "Welding Training and Certification",
    header: <BLKBoarding />,
    icon: <Year2024 />,
  },
  {
    title: "BLK KOMPETENSI - PROV JABAR NON BOARDING",
    description: "Welding Training and Certification",
    header: <BLKNon />,
    icon: <Year2024 />,
  },
  {
    title: "PT. HINO MOTOR MANUFACTURING INDONESIA",
    description: "Welding Training and Certification",
    header: <Hino />,
    icon: <Year2023 />,
  },
  {
    title: "BLK MANDIRI DISNAKERTRANS PEMPROV JAWA BARAT",
    description: "Welding Training and Certification",
    header: <BLKmandiri />,
    icon: <Year2022 />,
  },
  {
    title: "LAPAS KOTA BEKASI",
    description: "Welding Training and Certification",
    header: <Lapas />,
    icon: <Year2021 />,
  },
];
