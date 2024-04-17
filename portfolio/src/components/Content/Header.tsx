import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { keepTheme, setTheme } from "./theme";
import { Sections, ActiveSectionProps } from "./ScrollContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Header_DarkMode from "../../images/Header_DarkMode.svg";
import Header_LightMode from "../../images/Header_LightMode.svg";
import Mode_Dark from "../../images/dark_mode.svg";
import Mode_Light from "../../images/light_mode.svg";

export type HeaderProps = {
    showNavSection?: boolean;
}

const Header: React.FC<ActiveSectionProps & HeaderProps> = ({ activeSection, showNavSection }) => {
    const [theme, setMode] = useState(keepTheme);

    // Set up the initial color theme
    useEffect(() => {
        setTheme({ themeName: window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light", setThemeName: setMode });
    }, []);

    // Toggles dark mode on or off
    const toggleMode = () => {
        setTheme({ themeName: theme == "dark" ? "light" : "dark", setThemeName: setMode });
    };

    return (
        <div className="header lg:w-1/3 lg:py-24 lg:mr-10 lg:max-h-screen sticky top-0 min-w-92 flex-none flex flex-col justify-between">
            <div>
                {/* Logo */}
                <Link className="min-w-full" to="/">
                    <img src={theme === "dark" ? Header_DarkMode : Header_LightMode} />
                </Link>

                {/* Sub-header */}
                <div className="flex mt-1 gap-3">
                    {/* Title */}
                    <h4 className={`text-lg lg:text-xl tracking-tight ${theme === "dark" ? "text-slate-400" : "text-slate-700"}`}>Software Engineer</h4>

                    <div className="mt-1 h-[20px] border-l-2 border-slate-600"></div>

                    {/* Social Media */}
                    <a href="https://github.com/JoshBenn">
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
                    <img className="icon h-[20px] w-auto mt-1 hover:bg-[#64ffda]/35 rounded-full"
                        src={theme === "dark" ? Mode_Light : Mode_Dark}
                        alt="Mode Selection" onClick={toggleMode}
                    />
                </div>
            </div>

            <p className="flex-wrap hidden md:flex text-slate-400">I'm a software engineer and USAF veteran with over a decade of experience working in high-stress high-performance environments. I'm a perpetual learner, always hungry for improvement!</p>

            {/* Navigation Pane */}
            <ul className={`flex flex-row pb-2 lg:flex-col gap-3 text-lg lg:text-xl justify-around lg:font-bold ${showNavSection ? "" : "invisible"}`}>
                <li className="flex">
                    <hr
                        className={`w-0 hr-expand my-3 h-1 rounded-lg border-0 ${activeSection === Sections.About ? "md:w-24 bg-[#64ffda]" : "md:w-4 bg-white"}`}
                    />
                    <a className={`ml-0 md:ml-2 ${activeSection === Sections.About ? "text-[#64ffda]" : ""}`}
                        href="#About">
                        About
                        <hr
                            className={`md:invisible -mt-1 w-0 hr-expand h-0.5 rounded-lg border-0 ${activeSection === Sections.About ? "w-full bg-[#64ffda]" : ""}`}
                        />
                    </a>
                </li>

                <li className="flex">
                    <hr
                        className={`w-0 hr-expand my-3 h-1 rounded-lg border-0 ${activeSection === Sections.Projects ? "md:w-24 bg-[#64ffda]" : "md:w-4 bg-white"}`}
                    />
                    <a className={`ml-0 md:ml-2 ${activeSection === Sections.Projects ? "text-[#64ffda]" : ""}`}
                        href="#Projects">Projects
                        <hr
                            className={`md:invisible -mt-1 w-0 hr-expand h-0.5 rounded-lg border-0 ${activeSection === Sections.Projects ? "w-full bg-[#64ffda]" : ""}`}
                        />
                    </a>
                </li>

                <li className="flex">
                    <hr
                        className={`w-0 hr-expand my-3 h-1 rounded-lg border-0 ${activeSection === Sections.Experience ? "md:w-24 bg-[#64ffda]" : "md:w-4 bg-white"}`}
                    />
                    <a className={`ml-0 md:ml-2 ${activeSection === Sections.Experience ? "text-[#64ffda]" : ""}`}
                        href="#Experience">Experience
                        <hr
                            className={`md:invisible -mt-1 w-0 hr-expand h-0.5 rounded-lg border-0 ${activeSection === Sections.Experience ? "w-full bg-[#64ffda]" : ""}`}
                        />
                    </a>
                </li>

                <li className="flex">
                    <hr
                        className={`w-0 hr-expand my-3 h-1 rounded-lg border-0 ${activeSection === Sections.Extras ? "md:w-24 bg-[#64ffda]" : "md:w-4 bg-white"}`}
                    />
                    <a className={`ml-0 md:ml-2 ${activeSection === Sections.Extras ? "text-[#64ffda]" : ""}`}
                        href="#Extras">
                        Extras
                        <hr
                            className={`md:invisible -mt-1 w-0 hr-expand h-0.5 rounded-lg border-0 ${activeSection === Sections.Extras ? "w-full bg-[#64ffda]" : ""}`}
                        />
                    </a>
                </li>
            </ul>
            <div className=""></div>
        </div>
    );
}

export default Header;
