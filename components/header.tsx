"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

type linkType = {
  text: string;
  link: string;
};
export default function Header() {
  const [showMenu, setShownMenu] = useState(false);
  return (
    <header className="bg-main-blue">
      <div className="py-5 px-6 flex justify-between items-center lg:max-w-7xl lg:mx-auto">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 text-3xl font-bold "
          >
            <Image
              src="/logo.svg"
              alt="SwiftPay"
              title="SwiftPay"
              width={500}
              height={500}
              className="h-10 w-auto"
            />
            <span className="text-[#023247]">SwiftPay</span>
          </Link>
        </div>
        <nav className="">
          <button
            onClick={() => setShownMenu(!showMenu)}
            className="block lg:hidden text-3xl text-neutral-600"
          >
            <MdMenu />
          </button>
          <ul className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <li key={link.link}>
                <Link href={`/${link.link}`} className="">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <AnimatePresence>
            {showMenu && (
              <motion.div
                key="menu"
                className="absolute top-0 right-0 h-screen bg-white w-[22rem] shadow py-10 z-10"
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "100%" }}
              >
                <button
                  onClick={() => setShownMenu(!showMenu)}
                  className="block lg:hidden text-3xl text-neutral-600"
                >
                  <MdMenu />
                </button>
                <ul className="flex flex-col items-center gap-10">
                  {links.map((link) => (
                    <li key={link.link}>
                      <Link href={`/${link.link}`} className="">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}

const links: linkType[] = [
  { text: "Products", link: "#products" },
  { text: "Customers", link: "#customers" },
  { text: "Pricing", link: "#pricing" },
  { text: "Learn", link: "#learn" },
];
