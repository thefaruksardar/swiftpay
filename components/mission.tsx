"use client";
import React from "react";
import { FadeUp } from "./animations/fadeup";

export default function Mission() {
  return (
    <section className="bg-white px-6 py-10">
      <FadeUp duration={0.75} delay={0.4}>
        <div className="text-center mb-12 mx-auto md:max-w-96">
          <p className="text-light-blue mb-2 font-semibold">OUR MISSION</p>
          <h2 className="text-center text-4xl font-medium leading-[2.75rem] mb-5">
            We've helped innovative companies
          </h2>

          <p className="text-slate-500">
            Hundreds of all sizes and across all industries have made a big
            improvements with us.
          </p>
        </div>
      </FadeUp>

      <div className="flex flex-col items-center gap-12 text-center md:flex-row md:justify-center">
        <div>
          <p className="text-6xl font-semibold mb-2">24%</p>
          <p className="text-[#023247]">Revenue business</p>
        </div>

        <div>
          <p className="text-6xl font-semibold mb-2">180K</p>
          <p className="text-[#023247]">In annual revenue</p>
        </div>

        <div>
          <p className="text-6xl font-semibold mb-2">10+</p>
          <p className="text-[#023247]">Months of runway</p>
        </div>
      </div>
    </section>
  );
}
