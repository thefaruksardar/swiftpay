"use client";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { FadeUp } from "./animations/fadeup";

export default function Tryit() {
  return (
    <section className="bg-[#023247]">
      <div className=" px-6 py-10 lg:flex md:mx-auto lg:items-center lg:py-28 lg:max-w-7xl">
        <div className=" text-center mb-12 lg:pr-64 lg:text-left  lg:max-w-[60%]">
          <FadeUp y={20} duration={1.25} delay={0.4}>
            <p className="text-light-blue mb-2">TRY IT NOW</p>
            <h2 className="text-center text-neutral-50 text-4xl font-medium leading-[2.75rem] mb-5 xl:text-left">
              Ready to level up your payment process?
            </h2>
            <p className="text-neutral-50">
              Supports email businesses with simple invoicing powerful
              integrations and cash flow management tools.{" "}
            </p>
          </FadeUp>
        </div>
        <FadeUp y={40} duration={1.25} delay={0.4}>
          <div className="flex justify-center items-center gap-5 ">
            <Link
              href="/"
              className="bg-light-blue text-neutral-50 px-6 py-4 rounded-lg"
            >
              Get Started Now
            </Link>
            <Link
              href="/"
              className="bg-[#023247] border border-neutral-50 flex items-center gap-2 text-neutral-50 px-6 py-4 rounded-lg"
            >
              Get Started Now
              <MdArrowOutward className="text-xl" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
