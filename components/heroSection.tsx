"use client";
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { FadeUp } from "./animations/fadeup";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-main-blue">
      <div className="px-6  pb-32 md:flex md:gap-12 md:mx-auto lg:max-w-7xl lg:pb-60">
        <div className="pt-12 md:w-[65%]">
          <FadeUp delay={0.5} duration={0.5} y={15}>
            <h1 className="text-4xl font-medium leading-10 lg:text-5xl lg:pr-60">
              <span className="font-bold">Make quick payment</span> and save
              money on processing fees for a lifetime!
            </h1>
            <p className="mt-8 text-slate-500">
              Support small businesses with simple invoicing, powerful
              integrations, cash flow management tools
            </p>
          </FadeUp>

          <FadeUp delay={1} duration={0.5} y={25}>
            <form className="mt-8 md:w-1/2">
              <div className="border rounded-2xl pl-5 bg-white flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Your business email"
                  className="py-4 focus:outline-none"
                />
                <Link
                  href="/"
                  className="bg-[#2A8E9E] text-nowrap px-3 rounded-r-2xl text-white py-4 flex items-center gap-1"
                >
                  Get Stared <MdArrowOutward className="text-xl" />
                </Link>
              </div>
            </form>
            <div className="flex items-center grayscale	md:w-1/2">
              <Image
                src="/klarna.svg"
                height={500}
                width={500}
                alt="klarna"
                title="klarna"
                className="h-20"
              />
              <Image
                src="/coinbase.svg"
                height={500}
                width={500}
                alt="coinbase"
                title="coinbase"
                className="w-28"
              />
              <Image
                src="/uber.svg"
                height={500}
                width={500}
                alt="uber"
                title="uber"
                className="h-20"
              />
            </div>
          </FadeUp>
        </div>

        <div className="md:w-[35%]">
          <FadeUp delay={1} duration={0.5} y={25}>
            <Image
              src="/main-image.png"
              alt="main image"
              title="main image"
              width={1000}
              height={1000}
              className="w-96 mx-auto image-shadow"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
