"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const socialLinks = [
  { label: "Github", href: "#" },
  { label: "Linked In", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
];

const pageLinks = [
  { label: "Home", href: "/", colorClass: "bg-yellow-400" },
  { label: "About", href: "/about", colorClass: "bg-teal-400" },
  { label: "Work", href: "/work", colorClass: "bg-blue-400" },
  { label: "Contact", href: "/contact", colorClass: "bg-gray-400" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  useGSAP(() => {
    if (menu)
      gsap.to(".mobile-menu", {
        borderRadius: "0%",
        opacity: 1,
        x: "0%",
        duration: 0.5,
        ease: "power3.out",
      });
    else
      gsap.to(".mobile-menu", {
        borderRadius: "50%",
        opacity: 0,
        x: "100%",
        duration: 0.3,
        ease: "power3.in",
      });
  }, [menu]);

  return (
    <header className="fixed top-0 left-0 right-0 p-4 z-[100]">
      <nav className="flex justify-end max-w-screen mx-auto">
        <button
          onClick={() => setMenu(!menu)}
          className="relative w-10 h-10 group hover:cursor-pointer z-[110] outline-none"
        >
          <div className="flex flex-col justify-center items-center h-full w-full gap-2">
            <span
              className={`block w-6 h-1 rounded-sm bg-white-whisper transition-all duration-300 ease-out group-hover:scale-x-125 group-hover:bg-brand
              ${menu ? "translate-y-[0.3725rem] rotate-45" : ""}`}
            ></span>
            <span
              className={`block w-6 h-1 rounded-sm bg-white-whisper transition-all duration-300 ease-out group-hover:scale-x-125 group-hover:bg-brand
              ${menu ? "-translate-y-[0.3725rem] -rotate-45" : ""}`}
            ></span>
          </div>
        </button>

        {/* This container now holds both the overlay and the mobile menu */}
        <div
          className={`fixed inset-0 z-[90] transition-opacity duration-300 ${
            menu ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Overlay with a semi-transparent background */}
          <div
            onClick={() => setMenu(false)}
            className="absolute inset-0 bg-black/50"
          ></div>

          {/* Mobile menu content */}
          <div className="mobile-menu absolute top-0 right-0 translate-x-full overflow-hidden rounded-[50%]">
            <div className="w-screen sm:w-auto h-screen bg-gray-gunmetal flex flex-col items-center justify-center px-30">
              <div className="flex flex-col md:flex-row gap-16">
                <div className="flex flex-col gap-5">
                  <h4 className="text-xl tracking-widest font-semibold text-white-ghost uppercase">
                    Social
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {socialLinks.map(({ label, href }) => (
                      <li key={label}>
                        <Link
                          href={href}
                          className="text-xl text-white-whisper hover:underline"
                          onClick={() => setMenu(false)}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-5">
                  <h4 className="text-xl tracking-widest font-semibold text-white-ghost uppercase">
                    Menu
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {pageLinks.map(({ label, href, colorClass }) => (
                      <li
                        key={label}
                        className="group transition-all duration-300 ease-out flex justify-between items-center relative"
                      >
                        <Link
                          href={href}
                          className="text-xl ml-10"
                          onClick={() => setMenu(false)}
                        >
                          <span
                            className={`origin-left transition-all duration-300 ease-out absolute left-0 translate-1 h-4 w-4 rounded-full group-hover:scale-200 ${colorClass}`}
                          >
                            <MdArrowOutward className="hidden group-hover:block h-full w-full text-white-cool" />
                          </span>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute bottom-5 text-left mx-16">
                <h4 className="text-md tracking-widest font-semibold text-white-ghost uppercase">
                  Get in Touch
                </h4>
                <Link
                  href="mailto:muhammadhamasmunawar@gmail.com"
                  className="text-white-whisper text-md hover:underline"
                >
                  muhammadhamasmunawar@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
