"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCode } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-[60%] mx-auto sticky top-0 z-50  bg-black shadow-md ">
      <nav className="flex justify-between items-center h-16 text-gray-300 mt-4.5 mr-5.5">
        <ul className="flex gap-10 text-[20px] text-gray-300 text-md">
          <Link href="/">
            <li className="relative cursor-pointer group">
              <span
                className={`transition-colors duration-300 ${
                  pathname === "/"
                    ? "text-indigo-400"
                    : "group-hover:text-indigo-400"
                }`}
              >
                About
              </span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-indigo-400 transition-all duration-300 ${
                  pathname === "/" ? "w-[60%]" : "w-0 group-hover:w-[60%]"
                }`}
              ></span>
            </li>
          </Link>

          <Link href="/project">
            <li className="relative cursor-pointer group">
              <span
                className={`transition-colors duration-300 ${
                  pathname === "/project"
                    ? "text-indigo-400"
                    : "group-hover:text-indigo-400"
                }`}
              >
                Projects
              </span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-indigo-400 transition-all duration-300 ${
                  pathname === "/project" ? "w-[60%]" : "w-0 group-hover:w-[60%]"
                }`}
              ></span>
            </li>
          </Link>

          <Link href="/skill">
            <li className="relative cursor-pointer group">
              <span
                className={`transition-colors duration-300 ${
                  pathname === "/skill"
                    ? "text-indigo-400"
                    : "group-hover:text-indigo-400"
                }`}
              >
                Skills
              </span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-indigo-400 transition-all duration-300 ${
                  pathname === "/skill" ? "w-[60%]" : "w-0 group-hover:w-[60%]"
                }`}
              ></span>
            </li>
          </Link>

          <Link href="/contact">
            <li className="relative cursor-pointer group">
              <span
                className={`transition-colors duration-300 ${
                  pathname === "/contact"
                    ? "text-indigo-400"
                    : "group-hover:text-indigo-400"
                }`}
              >
                Contact
              </span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-indigo-400 transition-all duration-300 ${
                  pathname === "/contact" ? "w-[60%]" : "w-0 group-hover:w-[60%]"
                }`}
              ></span>
            </li>
          </Link>
        </ul>
        <Link
          href="https://github.com/temupukki"
          className=" duration-300 ml-4.5 hidden lg:block"
        >
          <FaCode className="text-indigo-300 text-2xl mr-3" />
        </Link>
      </nav>
      <hr className="border-t-2 border-gray-500 opacity-40" />
    </div>
  );
}
