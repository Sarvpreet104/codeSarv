"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "@/app/ui/PrimaryButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const myLinks = [
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy", path: "/privacy" },
    { name: "Terms", path: "/terms" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`border-2 border-[var(--border-color)] bg-[var(--ele-bg-color)]/80 w-[95%] lg:w-[70%] mx-auto my-6 rounded-full px-2 lg:px-1 py-1 sticky top-6 z-50 backdrop-blur-sm`}
      >
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            className="font-semibold text-2xl rounded-full px-2 flex items-center"
          >
            codeSarv
          </Link>

          {/* Desktop Links */}
          <ul className="lg:flex lg:gap-6 hidden">
            {myLinks.map((value) => (
              <li key={value.name}>
                <Link
                  href={value.path}
                  className="text-[var(--accent-color)] hover:text-[var(--highlight-color)] hover:underline transition-all duration-300"
                >
                  {value.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Buttons */}
          <div className="flex gap-2">
            <button className="cursor-pointer lg:block hidden">Log in</button>
            <PrimaryButton name={"Sign up"} bLink="/" />

            {/* Mobile Menu Button */}
            <button
              className="cursor-pointer block lg:hidden rounded-full"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Image
                src={menuOpen ? "/icons/close2.svg" : "/icons/menu.svg"}
                alt="menu"
                width={24}
                height={24}
                className="invert hover:invert-75 transition-all duration-300"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-6 left-0 right-0 m-auto w-[95%] bg-[var(--ele-bg-color)]/80 backdrop-blur-sm text-center transition-all duration-500 ease-in-out overflow-hidden lg:hidden rounded-3xl z-40 ${
          menuOpen ? "h-[95vh] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full gap-6">
          {myLinks.map((value) => (
            <Link
              key={value.name}
              href={value.path}
              onClick={() => setMenuOpen(false)} // close on click
              className="text-[var(--accent-color)] text-2xl hover:text-[var(--highlight-color)] transition-all duration-300"
            >
              {value.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
