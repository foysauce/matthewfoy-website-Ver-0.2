import React from "react";
import { Fira_Code } from "@next/font/google";

const fira = Fira_Code({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex flex-row justify-between px-4 border-b border-myPrimary z-10 bg-mySecondary">
      <div className="border-r border-myPrimary h-full pr-4 py-1">
        <div className={`${fira.className} text-2xl text-myAccent `}>
          &lt;F&gt;
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <a>Home</a>
        <a>Projects</a>
        <a>About Me</a>
        <a>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
