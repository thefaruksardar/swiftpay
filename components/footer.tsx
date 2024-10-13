import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-main-blue px-6 py-10">
      <div className="md:flex md:justify-around md:mx-auto lg:max-w-7xl">
        <div className="mb-8">
          {" "}
          <div className="text-3xl font-bold text-neutral-900">SwiftPay</div>
        </div>
        <div className="flex flex-col gap-3 mb-8">
          <p className="font-semibold mb-3 text-[1.2rem]">Solutions</p>
          <Link href="#">Small Bussiness</Link>
          <Link href="#">Freelancers</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Taxes</Link>
        </div>
        <div className="mb-8 flex flex-col gap-3">
          <p className="font-semibold mb-3 text-[1.2rem]">Company</p>
          <Link href="#">About Us</Link>
          <Link href="#">Career</Link>
          <Link href="#">Contact</Link>
        </div>
        <div className="mb-8 flex flex-col gap-3">
          <p className="font-semibold mb-3 text-[1.2rem]">Learn</p>
          <Link href="#">Blog</Link>
          <Link href="#">Ebooks</Link>
          <Link href="#">Guides</Link>
          <Link href="#">Templates</Link>
        </div>
        <div className="mb-8">
          <p className="font-semibold mb-3 text-[1.2rem]">Follow us on</p>
          <div className="flex items-center gap-3">
            <Link
              aria-label="follow us on Twitter"
              href="#"
              className="text-2xl"
            >
              <FaTwitter />
            </Link>

            <Link
              aria-label="follow us on Linkedin"
              href="#"
              className="text-2xl"
            >
              <FaLinkedin />
            </Link>

            <Link
              aria-label="follow us on Facebook"
              href="#"
              className="text-2xl"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-400 pt-8 text-center">
        &copy;Swiftpay {new Date().getFullYear()}. All Rights Reserved
      </div>
    </footer>
  );
}
