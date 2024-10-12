"use client";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { FadeUp } from "./animations/fadeup";

export default function Plan() {
  return (
    <section>
      <div className="p-6 md:mx-auto lg:max-w-7xl">
        <p className="text-light-blue  text-center mb-8 font-semibold">
          CHOOSE PLAN:
        </p>
        <div className="flex flex-col gap-10 md:flex-row md:justify-center lg:px-32">
          <div className=" md:flex-1">
            <FadeUp duration={1.25} delay={0.4}>
              <div className="block bg-main-blue px-6 py-8 rounded-xl md:py-6">
                <p className="text-5xl mb-10">Plus</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg">$2.99/month</p>
                  <Link
                    href="#"
                    className="bg-light-blue p-4 rounded-full text-neutral-50"
                  >
                    <MdArrowForwardIos />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
          <div className=" md:flex-1">
            <FadeUp duration={1.25} delay={1.25}>
              <div
                style={premium}
                className="block bg-light-blue px-6 py-8 rounded-xl md:py-6"
              >
                <p className="text-5xl mb-10 text-neutral-50">Premium</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg text-neutral-50">$6.99/month</p>
                  <Link
                    href="#"
                    className="bg-main-blue p-4 rounded-full text-light-blue"
                  >
                    <MdArrowForwardIos />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

const premium = {
  background: "url('/plan-bg.png') no-repeat center scroll",
  backgroundSize: "cover",
};
