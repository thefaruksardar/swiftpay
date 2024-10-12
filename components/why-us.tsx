"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { FadeUp } from "./animations/fadeup";
import NumberUp from "./animations/numberUp";
import { useInView } from "framer-motion";

export default function Whyus() {
  const ref = useRef(null);
  const totalBusiness = useInView(ref);
  return (
    <section>
      <div className="md:mx-auto lg:max-w-7xl">
        <FadeUp duration={0.75} delay={0.4}>
          <div className="p-6 mx-6 bg-white">
            <p className="text-center text-light-blue mb-2">WHY US</p>
            <h2 className="text-center text-4xl font-medium leading-[2.75rem]">
              Why they prefer Shifypay
            </h2>
          </div>
        </FadeUp>
        <div className="flex flex-col gap-6 p-6 lg:mx-auto lg:max-w-5xl">
          <div className="flex flex-col gap-6 md:flex-row lg:justify-center">
            <FadeUp y={20} duration={0.5} delay={0.45}>
              <div className="bg-main-blue py-14 px-8 rounded-xl">
                <p
                  ref={ref}
                  className="text-light-blue text-7xl font-semibold mb-10"
                >
                  <NumberUp
                    start={0}
                    end={3}
                    duration={2000}
                    useref={totalBusiness}
                  />
                  K+
                </p>
                <p className="text-neutral-800 text-2xl">
                  Businesses already running on Shifypay
                </p>
              </div>
            </FadeUp>
            <FadeUp y={20} duration={0.5} delay={0.75}>
              <div className="bg-main-blue py-10 px-8 rounded-xl">
                <p className="text-2xl mb-10 lg:mb-20">
                  Instant Withdraw your funds at any time
                </p>
                <div className="flex justify-center items-center gap-14 text-neutral-800">
                  <Image
                    src="/swiftpay-icon.svg"
                    alt="swiftpay icon"
                    title="swiftpay icon"
                    width={500}
                    height={500}
                    className="w-16"
                  />
                  <Image
                    src="/exchange.svg"
                    alt="exchange"
                    title="exchange"
                    width={500}
                    height={500}
                    className="w-10"
                  />
                  <Image
                    src="/bank-icon.svg"
                    alt="bank icon"
                    title="bank icon"
                    width={500}
                    height={500}
                    className="w-16"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
          <FadeUp y={20} duration={0.5} delay={1.15}>
            <div className="bg-main-blue py-10 px-8 rounded-xl flex flex-col gap-12 md:flex-row md:items-center">
              <div className="md:w-[35%]">
                <h3 className="text-2xl mb-6">No asset volatility</h3>
                <p className="text-slate-500">
                  Generate returns on your cash reserves without making any
                  investments.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg md:w-[65%]">
                <Image
                  src="/chart.png"
                  alt="chart"
                  title="chart"
                  width={1000}
                  height={1000}
                  className="w-full"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
