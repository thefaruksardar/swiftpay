"use client";
import React, { useRef } from "react";
import { FadeUp } from "./animations/fadeup";
import NumberUp from "./animations/numberUp";
import { useInView } from "framer-motion";

export default function Mission() {
  const revenueBusinessref = useRef(null);
  const revenueBusiness = useInView(revenueBusinessref);

  const annualRevenueref = useRef(null);
  const annualRevenue = useInView(annualRevenueref);

  const runwayref = useRef(null);
  const runway = useInView(runwayref);

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
          <p ref={revenueBusinessref} className="text-6xl font-semibold mb-2">
            <NumberUp end={24} duration={2000} useref={revenueBusiness} />%
          </p>
          <p className="text-[#023247]">Revenue business</p>
        </div>

        <div>
          <p ref={annualRevenueref} className="text-6xl font-semibold mb-2">
            <NumberUp end={180} duration={1500} useref={annualRevenue} />K
          </p>
          <p className="text-[#023247]">In annual revenue</p>
        </div>

        <div>
          <p ref={runwayref} className="text-6xl font-semibold mb-2">
            <NumberUp end={10} duration={1500} useref={runway} />+
          </p>
          <p className="text-[#023247]">Months of runway</p>
        </div>
      </div>
    </section>
  );
}
