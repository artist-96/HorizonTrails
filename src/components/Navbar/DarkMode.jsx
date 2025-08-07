"use client";
import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark"; // Set default to dark
    }
    return "dark";
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const element = document.documentElement;
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.remove("dark");
      element.classList.remove("light");
    }
  }, [theme]); // Only run when theme changes

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun
          onClick={() => setTheme("light")}
          className="text-2xl cursor-pointer"
        />
      ) : (
        <BiSolidMoon
          onClick={() => setTheme("dark")}
          className="text-2xl cursor-pointer"
        />
      )}
    </>
  );
};

export default DarkMode;
