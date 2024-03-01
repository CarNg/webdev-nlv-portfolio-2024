"use client";

import { type ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/project/");

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: theme !== "dark" ? "#fcfcfc" : "#012030",
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: isProjectPage ? false : true,
            mode: "push",
          },
          onHover: {
            enable: isProjectPage,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme !== "dark" ? "#012030" : "#fcfcfc",
        },
        links: {
          color: theme !== "dark" ? "#012030" : "#fcfcfc",
          distance: 100,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 90,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [theme, init, isProjectPage]
  );

  return <>{init && <Particles id="tsparticles" options={options} />}</>;
}
