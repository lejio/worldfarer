import React from "react";
import GithubLink from "./GithubLink";

export default function Footer() {
  return (
    <footer className="w-full flex flex-row justify-center md:justify-between align-middle items-center font-zxproto p-5 text-[0.625rem] md:text-xs dark:text-gray-400 text-[#888888]">
      <h2 className="md:transition-colors md:duration-300 md:hover:text-green-800 dark:md:hover:text-green-600 md:hover:cursor-default">© 2025 Gene Ni. All rights reserved.</h2>
      <div className="w-10 h-10 hidden md:block"><GithubLink /></div>
    </footer>
  );
}
