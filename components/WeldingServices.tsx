"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function WeldingServices() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-105 "
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] ">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full rounded-xl max-w-[500px] md:mt-12 h-85% md:h-fit md:max-h-[80%]   flex flex-col bg-muted  sm:rounded-3xl overflow-y-scroll scrollbar-hide"
            >
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-32 bg-white right-2 lg:hidden items-center justify-center  rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={active.src}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4 ">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium  text-base "
                    >
                      {active.title}
                    </motion.h3>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-visible  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 items-stretch gap-8">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col border-2 hover:shadow-md rounded-xl cursor-pointer "
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={card.src}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium  text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Welding Service",
    title: "Welding Procedure (WPS/PQR)",
    src: "/work/proj1.mp4",
    content: () => {
      return (
        <p>
          Welding Procedure Specification (WPS) is a written document that
          provides guidance on how a weld joint should be made to ensure the
          results meet the desired standards. Procedure Qualification Record
          (PQR) is a record or documentation of the results of tests that have
          been carried out on a particular welding procedure to verify that the
          procedure produces a joint that meets quality standards.
        </p>
      );
    },
  },
  {
    description: "Welding Service",
    title: "Welding Consultant",
    src: "/work/consultant.mp4",
    content: () => {
      return (
        <p>
          WQT (Welder Qualification Test) is a qualification test to measure a
          welder&apos;s ability to perform welding according to certain
          procedures and standards. Usually, this test is carried out based on
          an approved welding procedure (WPS - Welding Procedure Specification)
          and is intended to ensure that the welder meets the technical
          requirements needed in a project or industry.
        </p>
      );
    },
  },

  {
    description: "Welding Service",
    title: "Welding Inspection",
    src: "/work/inspection.mp4",
    content: () => {
      return (
        <p>
          Providing professional Welding Inspection services to ensure the
          quality, safety, and compliance of welded structures. Specializing in
          visual inspection (VT), non-destructive testing (NDT), and welding
          code compliance, with expertise in identifying defects, assessing weld
          integrity, and verifying adherence to industry standards such as AWS,
          ASME, and ISO. Ideal for construction, manufacturing, and industrial
          projects requiring reliable welding quality assurance.
        </p>
      );
    },
  },
  {
    description: "Welding Service",
    title: "Welder test",
    src: "/work/jepang.mp4",
    content: () => {
      return (
        <p>
          Welder Qualification Testing to certify welders according to industry
          standards such as AWS, ASME, and ISO. The testing process includes
          performance qualification tests (PQT), procedure qualification records
          (PQR), and destructive or non-destructive testing (NDT) to ensure
          skill proficiency and compliance. Essential for construction,
          fabrication, and industrial projects that require certified and
          competent welders.
        </p>
      );
    },
  },
  {
    description: "Welding Service",
    title: "Pipe Fitter Training",
    src: "/work/pt omega.mp4",
    content: () => {
      return (
        <p>
          Pipe Fitter Training focused on developing skills in pipe layout,
          cutting, threading, bending, and installation. Training covers
          blueprint reading, isometric drawing interpretation, welding
          preparation, and safety procedures to ensure high-quality pipefitting
          work. Designed for individuals and professionals in construction, oil
          & gas, manufacturing, and industrial piping industries seeking to
          enhance their expertise and certification.
        </p>
      );
    },
  },
  {
    description: "Welding Service",
    title: "Welder & Pipe Fitter Test",
    src: "/work/pipe_fitter_test.mp4",
    content: () => {
      return (
        <p>
          Welder & Pipe Fitter Testing to assess and certify skills based on
          industry standards such as AWS, ASME, and ISO. The testing process
          includes welding performance qualification (PQT), procedure
          qualification records (PQR), and non-destructive or destructive
          testing (NDT) for welders, as well as pipe fitting layout, cutting,
          threading, and installation assessments for pipe fitters. Essential
          for ensuring competency in construction, oil & gas, manufacturing, and
          industrial piping projects.
        </p>
      );
    },
  },
  {
    description: "Welding Service",
    title: "Welder & Pipe Fitter Test 1",
    src: "/work/slovakia 2.mp4",
    content: () => {
      return <p>Welder & Pipe fitter departure destination Slovakia</p>;
    },
  },
  {
    description: "Welding Service",
    title: "Welder & Pipe Fitter Test 2",
    src: "/work/cilacap.mp4",
    content: () => {
      return <p>Welder & Pipe fitter departure destination Slovakia</p>;
    },
  },
];
