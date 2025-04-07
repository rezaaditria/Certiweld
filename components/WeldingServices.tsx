"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function WeldingServices() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
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

const WPS = () => (
  <video
    src="/work/proj1.mp4"
    className="object-cover object-center rounded-xl w-full h-full min-h-[6rem]"
    autoPlay
    muted
    loop
    playsInline
  />
);
const Consultant = () => (
  <video
    src="/work/consultant.mp4"
    className="object-cover object-center rounded-xl w-full h-full min-h-[6rem]"
    autoPlay
    muted
    loop
    playsInline
  ></video>
);
const Inspection = () => (
  <video
    src="/work/inspection.mp4"
    className="object-cover object-center rounded-xl w-full h-full min-h-[6rem]"
    autoPlay
    muted
    loop
    playsInline
  ></video>
);
const Weldertest = () => (
  <video
    src="/work/jepang.mp4"
    className="object-cover object-center rounded-xl w-full h-full min-h-[6rem]"
    autoPlay
    muted
    loop
    playsInline
  ></video>
);
const Pipetraining = () => (
  <video
    src="/work/pt omega.mp4"
    className="object-cover object-center rounded-xl w-full h-full min-h-[6rem]"
    autoPlay
    muted
    loop
    playsInline
  ></video>
);
const PipeFitter = () => (
  <video
    src="/work/pipe_fitter_test.mp4"
    className="object-cover object-center rounded-xl w-full h-full min-h-[6rem]"
    autoPlay
    muted
    loop
    playsInline
  ></video>
);
const PipeFitter1 = () => (
  <video
    src="/work/slovakia 2.mp4"
    className="object-cover object-center rounded-xl w-full h-full min-h-[6rem]"
    autoPlay
    muted
    loop
    playsInline
  ></video>
);
const PipeFitter2 = () => (
  <video
    src="/work/cilacap.mp4"
    className="object-cover object-center rounded-xl w-full h-full min-h-[6rem]"
    autoPlay
    muted
    loop
    playsInline
  ></video>
);

const items = [
  {
    title: "Welding Procedure (WPS/PQR)",
    description:
      "What is WPS an PQR? Welding Procedure Specification (WPS) is a written document that provides guidance on how a weld joint should be made to ensure the results meet the desired standards. Procedure Qualification Record (PQR) is a record or documentation of the results of tests that have been carried out on a particular welding procedure to verify that the procedure produces a joint that meets quality standards.",
    header: <WPS />,
  },
  {
    title: "Welding Consultant",
    description:
      "WQT (Welder Qualification Test) is a qualification test to measure a welder's ability to perform welding according to certain procedures and standards. Usually, this test is carried out based on an approved welding procedure (WPS - Welding Procedure Specification) and is intended to ensure that the welder meets the technical requirements needed in a project or industry.",
    header: <Consultant />,
  },
  {
    title: "Welding Inspection",
    description:
      "Providing professional Welding Inspection services to ensure the quality, safety, and compliance of welded structures. Specializing in visual inspection (VT), non-destructive testing (NDT), and welding code compliance, with expertise in identifying defects, assessing weld integrity, and verifying adherence to industry standards such as AWS, ASME, and ISO. Ideal for construction, manufacturing, and industrial projects requiring reliable welding quality assurance.",
    header: <Inspection />,
  },
  {
    title: "Welder test",
    description:
      "Welder Qualification Testing to certify welders according to industry standards such as AWS, ASME, and ISO. The testing process includes performance qualification tests (PQT), procedure qualification records (PQR), and destructive or non-destructive testing (NDT) to ensure skill proficiency and compliance. Essential for construction, fabrication, and industrial projects that require certified and competent welders.",
    header: <Weldertest />,
  },
  {
    title: "Pipe Fitter Training",
    description:
      "Pipe Fitter Training focused on developing skills in pipe layout, cutting, threading, bending, and installation. Training covers blueprint reading, isometric drawing interpretation, welding preparation, and safety procedures to ensure high-quality pipefitting work. Designed for individuals and professionals in construction, oil & gas, manufacturing, and industrial piping industries seeking to enhance their expertise and certification.",
    header: <Pipetraining />,
  },
  {
    title: "Welder & Pipe fitter test",
    description:
      "Welder & Pipe Fitter Testing to assess and certify skills based on industry standards such as AWS, ASME, and ISO. The testing process includes welding performance qualification (PQT), procedure qualification records (PQR), and non-destructive or destructive testing (NDT) for welders, as well as pipe fitting layout, cutting, threading, and installation assessments for pipe fitters. Essential for ensuring competency in construction, oil & gas, manufacturing, and industrial piping projects.",
    header: <PipeFitter />,
  },
  {
    title: "Welder & Pipe fitter test",
    description: "Welder & Pipe fitter departure destination Slovakia",
    header: <PipeFitter1 />,
  },
  {
    title: "Welder & Pipe fitter test",
    description: "Welder & Pipe fitter departure destination Slovakia",
    header: <PipeFitter2 />,
  },
];
