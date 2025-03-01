"use client"; // Use client-side rendering for interactivity
import { useEffect, useState } from "react";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";

export default function Darkmode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    if (isDark) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

  }, []);

  // text-[#242C34] dark:text-[#fff] duration-300 text-[#fff] duration-300
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button onClick={toggleDarkMode} className="cursor-pointer rtl:ml-[10px] ltr:mr-[10px] hover:scale-[.99] " >
		{
			darkMode 
				? <Sun   className="text-white" data-aos="zoom-out" /> 
				: <Moon  className="text-gray-500" data-aos="zoom-in" /> 
		}
    </button>
  );
}


