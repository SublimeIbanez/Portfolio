import React from "react";
import { Link } from "react-router-dom";

import { keepTheme, setTheme } from "./theme";
import { Section, SectionInfoMap } from "./ScrollContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Header_DarkMode from "../../images/Header_DarkMode.svg";
import Header_LightMode from "../../images/Header_LightMode.svg";
import Mode_Dark from "../../images/dark_mode.svg";
import Mode_Light from "../../images/light_mode.svg";
import { clamp, cn } from "../../lib/utils";

export type HeaderProps = {
  sectionInfoMap: SectionInfoMap;
  showNavSection?: boolean;
};

const Header: React.FC<HeaderProps> = ({ sectionInfoMap, showNavSection }) => {
  const [theme, setMode] = React.useState(keepTheme);

  // Set up the initial color theme
  React.useEffect(() => {
    setTheme({
      themeName: window.matchMedia("(prefers-color-scheme: dark)")
        ? "dark"
        : "light",
      setThemeName: setMode,
    });
  }, []);

  // Toggles dark mode on or off
  const toggleMode = () => {
    setTheme({
      themeName: theme == "dark" ? "light" : "dark",
      setThemeName: setMode,
    });
  };

  const getWidthPercent = React.useCallback(
    (sectionSelector: (s: typeof Section) => Section) => {
      const section = sectionSelector(Section);
      return clamp(sectionInfoMap[section]?.elementVisiblePercent ?? 0, 0, 100);
    },
    [sectionInfoMap],
  );
  const getBarWidthRem = React.useCallback(
    (sectionSelector: (s: typeof Section) => Section) => {
      const percent = getWidthPercent(sectionSelector);
      const min = 1; // rem, equivalent to w-4
      const max = 6; // rem, equivalent to w-24
      return min + ((max - min) * percent) / 100;
    },
    [getWidthPercent],
  );
  const interpolateColor = (
    percent: number,
    start: [number, number, number],
    end: [number, number, number],
  ) => {
    const t = percent / 100;
    const r = Math.round(start[0] + (end[0] - start[0]) * t);
    const g = Math.round(start[1] + (end[1] - start[1]) * t);
    const b = Math.round(start[2] + (end[2] - start[2]) * t);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const getBarColor = React.useCallback(
    (sectionSelector: (s: typeof Section) => Section) => {
      const percent = getWidthPercent(sectionSelector);

      return interpolateColor(
        percent,
        [148, 163, 184], // slate-400-ish
        [100, 255, 218], // #64ffda
      );
    },
    [getWidthPercent],
  );
  const getTextColor = React.useCallback(
    (sectionSelector: (s: typeof Section) => Section) => {
      const percent = getWidthPercent(sectionSelector);
      return interpolateColor(
        percent,
        [203, 213, 225], // lighter neutral
        [100, 255, 218], // accent
      );
    },
    [getWidthPercent],
  );

  return (
    <div
      className={cn(
        "header lg-1/3 lg:py-24 lg:mr-10 lg:max-h-screen overflow-y-auto sticky",
        "top-0 min-w-92 flex-none flex flex-col justify-between z-50",
      )}
    >
      <div>
        {/* Logo */}
        <Link className="min-w-full" to="/">
          <img src={theme === "dark" ? Header_DarkMode : Header_LightMode} />
        </Link>

        {/* Sub-header */}
        <div className="flex mt-1 gap-3">
          {/* Title */}
          <h4
            className={cn(
              "text-lg lg:text-xl tracking-tight",
              theme === "dark" ? "text-slate-400" : "text-slate-700",
            )}
          >
            Software Engineer
          </h4>

          <div className="mt-1 h-[20px] border-l-2 border-slate-600"></div>

          {/* Social Media */}
          <a href="https://github.com/SublimeIbanez">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/joshua-benn/">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </a>
          <a href="mailto:joshbenn@protonmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>

          <div className="mt-1 h-[20px] border-l-2 border-slate-600"></div>

          {/* Mode Selector */}
          <img
            className="icon h-[20px] w-auto mt-1 hover:bg-[#64ffda]/35 rounded-full"
            src={theme === "dark" ? Mode_Light : Mode_Dark}
            alt="Mode Selection"
            onClick={toggleMode}
          />
        </div>
      </div>

      <p className="flex-wrap hidden md:flex max-w-sm text-slate-400 text-sm">
        Software engineer and 7-year United States Air Force veteran who
        transitioned from defense IT operations to full-stack development. After
        managing classified networks and coordinating deployment operations for
        170+ personnel, I earned my Software Engineering degree from Arizona
        State University and dove into building modern applications. I
        specialize in Rust, C#/.NET, React, and TypeScript, with experience
        spanning NASA mission software, encrypted cloud storage systems, and
        accessibility-focused kiosk applications deployed with Kubernetes and
        Docker. I've also published open-source libraries on crates.io,
        including Logfather and Dekor (see projects). I bring military-grade
        discipline to solving complex problems, with a focus on security,
        performance, and creating tools that empower developers.
      </p>

      {/* Navigation Pane */}
      <ul
        className={cn(
          "flex flex-row pb-2 lg:flex-col gap-3 text-lg lg:text-xl justify-around lg:font-bold",
          !showNavSection && "invisible",
        )}
      >
        <li key={Section.About} className="flex">
          <hr
            className={cn("w-0 hr-expand my-3 h-1 rounded-lg border-0")}
            style={{
              width: `${getBarWidthRem((s) => s.About)}rem`,
              backgroundColor: getTextColor((s) => s.About),
            }}
          />
          <a
            className={cn("ml-0 md:ml-2")}
            style={{
              color: getBarColor((s) => s.About),
            }}
            href="#About"
          >
            About
            <hr
              className={cn(
                "md:invisible -mt-1 w-0 hr-expand h-0.5 rounded-lg border-0",
                //sectionInfoMap === Section.About && "w-full bg-[#64ffda]",
              )}
              style={{ width: `${getWidthPercent((s) => s.About)}%` }}
            />
          </a>
        </li>

        <li key={Section.Experience} className="flex">
          <hr
            className={cn("w-0 hr-expand my-3 h-1 rounded-lg border-0")}
            style={{
              width: `${getBarWidthRem((s) => s.Experience)}rem`,
              backgroundColor: getTextColor((s) => s.Experience),
            }}
          />
          <a
            className={cn("ml-0 md:ml-2")}
            style={{
              color: getBarColor((s) => s.Experience),
            }}
            href="#Experience"
          >
            Experience
            <hr
              className={cn(
                "md:invisible -mt-1 w-0 hr-expand h-0.5 rounded-lg border-0",
              )}
              style={{ width: `${getWidthPercent((s) => s.Experience)}%` }}
            />
          </a>
        </li>

        <li key={Section.Projects} className="flex">
          <hr
            className={cn("w-0 hr-expand my-3 h-1 rounded-lg border-0")}
            style={{
              width: `${getBarWidthRem((s) => s.Projects)}rem`,
              backgroundColor: getTextColor((s) => s.Projects),
            }}
          />
          <a
            className={cn(
              "ml-0 md:ml-2",
              sectionInfoMap[Section.Projects]?.isVisible && "text-[#64ffda]",
            )}
            href="#Projects"
            style={{
              color: getBarColor((s) => s.Projects),
            }}
          >
            Projects
            <hr
              className={cn(
                "md:invisible -mt-1 w-0 hr-expand h-0.5 rounded-lg border-0",
              )}
              style={{
                width: `${getWidthPercent((s) => s.Projects)}%`,
              }}
            />
          </a>
        </li>
      </ul>
      <div className=""></div>
    </div>
  );
};

export default Header;
