"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import IconDarkMode from "../assets/IconDarkMode.svg";
import IconLightMode from "../assets/IconLightMode.svg";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="fixed bottom-3 right-3 md:w-8 w-7 z-20">
      <div className="relative">
        <input
          type="checkbox"
          name="light-switch"
          className="cursor-pointer absolute light-switch w-full h-full opacity-0"
          checked={theme === "light"}
          onChange={() => {
            if (theme === "dark") {
              return setTheme("light");
            }
            return setTheme("dark");
          }}
        />
        <label className="cursor-pointer" htmlFor="light-switch">
          <Image
            className="hidden dark:block md:w-8 w-7 md:h-8 z-20"
            src={IconLightMode}
            alt="Light mode switch icon"
          />
          <Image
            className="dark:hidden md:w-8 w-7 md:h-8 z-20"
            src={IconDarkMode}
            alt="Dark mode switch icon"
          />
          <span className="sr-only">Switch to light / dark version</span>
        </label>
      </div>
    </div>
  );
}
