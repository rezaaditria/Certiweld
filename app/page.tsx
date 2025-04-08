"use client";
import { title } from "@/components/primitives";
import React from "react";
import { WeldingServices } from "@/components/WeldingServices";
import { Certification } from "@/components/Certification";
import Hero from "./hero";
import { Compro } from "./compro";
import { Contact } from "./contact";
import { Ceo } from "./CEO";
import Method from "./method";
import Services from "./services";
import Values from "./values";
import { Coop } from "./coop";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col items-center justify-center gap-8 "
      >
        <Hero />
        <Compro />
        <Ceo />

        <div>
          <Method />
        </div>

        <div id="services">
          <Services />
        </div>

        <section
          id="works"
          className="flex flex-col items-center justify-center gap-8 w-full max-w-7xl mx-auto"
        >
          <div>
            <div className="py-24 text-center">
              <div className="flex justify-center">
                <div className="px-2 py-1 my-2 text-xs font-semibold text-black bg-gray-300 rounded-full">
                  Our Projects
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

        <section id="Values">
          <Values />
        </section>

        <section id="contact">
          <Coop />
          <Contact />
        </section>

        <div className="flex gap-3 mt-6"></div>
      </section>
    </>
  );
}
