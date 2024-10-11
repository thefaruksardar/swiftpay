"use client";
import Image from "next/image";
import React from "react";
import { FadeUp } from "./animations/fadeup";

export default function Feature() {
  return (
    <section className="relative -mt-28 py-5 md:-mt-32 lg:-mt-52">
      <div className="px-6 py-10 mx-6  rounded-lg shadow-md bg-white lg:py-20 lg:px-16 md:mx-auto lg:max-w-7xl">
        <FadeUp duration={0.75} delay={0.4}>
          <div className="flex flex-col gap-7 md:flex-row">
            <div className="md:w-[55%]">
              <p className="text-light-blue">FUTURE PAYMENT</p>
              <h2 className="text-3xl font-medium leading-[2.75rem]">
                Experience that grows with your scale.
              </h2>
            </div>
            <p className="text-slate-500 md:pt-8 md:w-[45%]">
              Design a financial operating system that works for your business
              and streamlined cash flow management
            </p>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-7 mt-12 md:flex-row ">
          <FadeUp y={20} duration={0.5} delay={0.75}>
            <div className="pr-10">
              <Image
                src="/free-transfers.png"
                alt="free transfer"
                title="free transfer"
                width={1000}
                height={1000}
                className="w-20 mb-7"
              />
              <h3 className="text-2xl font-semibold mb-4">Free transfers</h3>
              <p className="text-slate-500">
                Create a financial experienceay and automate repeat purchases by
                scheduling recurring payments.
              </p>
            </div>
          </FadeUp>

          <FadeUp y={20} duration={0.5} delay={0.85}>
            <div className="pr-10">
              <Image
                src="/multiple-accounts.png"
                alt="free transfer"
                title="free transfer"
                width={1000}
                height={1000}
                className="w-20 mb-7"
              />
              <h3 className="text-2xl font-semibold mb-4">Multuple account</h3>
              <p className="text-slate-500">
                Run your operations with cash from your account and generate
                yield on funds stored in your account.
              </p>
            </div>
          </FadeUp>

          <FadeUp y={20} duration={0.5} delay={1.15}>
            <div className="pr-10">
              <Image
                src="/unmatched-security.png"
                alt="free transfer"
                title="free transfer"
                width={1000}
                height={1000}
                className="w-20 mb-7"
              />
              <h3 className="text-2xl font-semibold mb-4">
                Unmatched security
              </h3>
              <p className="text-slate-500">
                Securely manage your finances with organization-wide MFA,
                card-locking, and account-level controls.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
