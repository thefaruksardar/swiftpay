"use client";
import { FadeUp } from "./animations/fadeup";

export default function Steps() {
  return (
    <section className="bg-[#023247]">
      <div className=" px-6 py-10 md:mx-auto lg:max-w-7xl">
        <FadeUp duration={0.75} delay={0.4}>
          <div className="py-6 mb-6">
            <p className="text-light-blue">STEP</p>
            <h2 className="text-4xl text-neutral-50 font-medium leading-[2.75rem]">
              Maximize your returns with a Reserve account that generates.
            </h2>
          </div>
        </FadeUp>
        <div className="flex flex-col gap-8 md:flex-row">
          <FadeUp y={20} duration={0.85} delay={0.85}>
            <div className="bg-slate-50/10 py-6 px-5 rounded-xl">
              <h3 className="text-7xl font-semibold mb-2 bg-gradient-to-b from-main-blue text-transparent bg-clip-text to-[#023247]">
                1
              </h3>
              <p className="text-neutral-50 font-semibold mb-1">
                Open your account
              </p>
              <p className="text-neutral-300">
                Sign up to finpay and set up your account from the dashboard.
              </p>
            </div>
          </FadeUp>
          <FadeUp y={20} duration={0.85} delay={1.15}>
            <div className="bg-slate-50/10 py-6 px-5 rounded-xl">
              <h3 className="text-7xl font-semibold mb-2 bg-gradient-to-b from-main-blue text-transparent bg-clip-text to-[#023247]">
                2
              </h3>
              <p className="text-neutral-50 font-semibold mb-1">
                Transfer your money
              </p>
              <p className="text-neutral-300">
                Move money from to another account into and start to earning up.{" "}
              </p>
            </div>
          </FadeUp>
          <FadeUp y={20} duration={0.85} delay={1.7}>
            <div className="bg-slate-50/10 py-6 px-5 rounded-xl">
              <h3 className="text-7xl font-semibold mb-2 bg-gradient-to-b from-main-blue text-transparent bg-clip-text to-[#023247]">
                3
              </h3>
              <p className="text-neutral-50 font-semibold mb-1">
                Watch your balance grow
              </p>
              <p className="text-neutral-300">
                Accessed instantly and remain resulated from market volatility.{" "}
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
