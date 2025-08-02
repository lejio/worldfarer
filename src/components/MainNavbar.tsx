import React from "react";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function MainNavbar() {
  const THEME_ICON_SIZE = 28;
  const [darkTheme, setDarkTheme] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");
    const isDarkFromDOM = document.documentElement.classList.contains("dark");

    let isDark: boolean;
    if (savedTheme) {
      isDark = savedTheme === "dark";
    } else {
      isDark = isDarkFromDOM;
    }

    setDarkTheme(isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="w-full flex flex-row justify-end font-zxproto p-5">
        <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <div style={{ width: THEME_ICON_SIZE, height: THEME_ICON_SIZE }} />
        </button>
      </nav>
    );
  }

  return (
    <nav className="w-full flex flex-row justify-end font-zxproto p-5">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:cursor-pointer"
        aria-label="Toggle theme"
      >
        {darkTheme ? (
          <FaSun
            className="transition-color duration-300 text-gray-400 hover:text-green-600"
            size={THEME_ICON_SIZE}
          />
        ) : (
          <FaMoon
            className="transition-color duration-300 text-[#888888] hover:text-green-600"
            size={THEME_ICON_SIZE}
          />
        )}
      </button>
    </nav>
  );
}
