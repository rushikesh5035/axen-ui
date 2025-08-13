"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div
      className="cursor-pointer "
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5 text-black" color="black" />
      ) : (
        <SunIcon className="h-5 w-5 text-white" color="white" />
      )}
    </div>
  );
};

export default ThemeToggle;
