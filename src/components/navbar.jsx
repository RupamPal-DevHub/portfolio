"use client";
import { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "@/app/layout";

import { SquareTerminal } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = ({ curPage }) => {
  const { curTheme } = useContext(ThemeContext);
  console.log(curTheme);
  const router = useRouter();

  function nacColor() {
    if (curTheme == "spookydusk") {
      return "bg-orange-800";
    } else if (curTheme == "neonnights") {
      return "bg-navbar";
    } else if (curTheme == "morningglow") {
      return "bg-blue-700";
    } else if (curTheme == "retailblues") {
      return "bg-blue-800";
    } else if (curTheme == "codeinpurple") {
      return "bg-fuchsia-700";
    }
  }

  return (
    <div
      className={`${nacColor()} w-ful py-1 px-4 md:px-8 flex gap-3 md:gap-4 text-sm border-b border-bordercolor`}
    >
      <div
        className="font-bold hover:underline cursor-pointer flex items-center"
        onClick={() => router.push("/")}
      >
        <SquareTerminal size={20} />
      </div>
      <p className={`font-bold hover:underline cursor-pointer `}>|</p>
      <p
        className={`font-bold hover:underline cursor-pointer ${
          curPage == "home" ? "underline" : null
        }`}
        onClick={() => router.push("/portfolio")}
      >
        Home
      </p>
      <p
        className={`font-bold hover:underline cursor-pointer ${
          curPage == "about" ? "underline" : null
        }`}
        onClick={() => router.push("/about")}
      >
        AboutMe
      </p>
      <p
        className={`font-bold hover:underline cursor-pointer ${
          curPage == "projects" ? "underline" : null
        }`}
        onClick={() => router.push("/projects")}
      >
        Projects
      </p>
      <p
        className={`font-bold hover:underline cursor-pointer ${
          curPage == "contact" ? "underline" : null
        }`}
        onClick={() => router.push("/contact")}
      >
        ContactMe
      </p>
    </div>
  );
};

export default Navbar;
