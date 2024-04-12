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

    useEffect(() => {
        setTheme({ themeName: window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light", setThemeName: setMode });
    }, []);

    const toggleMode = () => {
        setTheme({ themeName: theme == "dark" ? "light" : "dark", setThemeName: setMode });
    };

    return (
        <div className="header lg:py-24 lg:mr-10 lg:max-h-screen sticky top-0 min-w-92 flex-none flex flex-col justify-between">
            <div>
                <div className="flex">
                    <Link className="text-5xl min-w-full" to="/">
                        <img src={theme === "dark" ? Header_DarkMode : Header_LightMode} />
                    </Link>
                </div>
                <div className="social flex mt-1">
                    <a href="https://github.com/JoshBenn">
                        <FontAwesomeIcon icon={faGithub} className="icon mr-4" />
                    </a>
                    <a href="https://www.linkedin.com/in/joshua-benn/">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon mr-4" />
                    </a>
                    <a href="mailto:joshbenn@protonmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="icon mr-3" />
                    </a>

                    <div className="mt-1 h-[20px] ml-3 pl-4 border-l-2 border-slate-600"></div>

                    <img className="icon h-[20px] w-auto mt-1"
                        src={theme === "dark" ? Mode_Light : Mode_Dark}
                        alt="Mode Selection" onClick={toggleMode}
                    />
                </div>
                <h3 className="text-2xl text-slate-400 text-end">Software Engineer</h3>
            </div>

            <ul className={`flex flex-row pb-3 lg:pb-24 lg:flex-col gap-3 text-xl justify-around font-bold ${showNavSection ? "" : "invisible"}`}>

                <li className="flex">
                    <hr
                        className={`w-0 hr-expand my-3 h-1 rounded-lg border-0 ${activeSection === Sections.About ? "md:w-24 bg-[#64ffda]" : "md:w-4 bg-white"}`}
                    />
                    <a className={`ml-0 md:ml-2 ${activeSection === Sections.About ? "text-[#64ffda]" : ""}`}
                        href="#About">
                        About
                    </a>
                </li>

                <li className="flex">
                    <hr
                        className={`w-0 hr-expand my-3 h-1 rounded-lg border-0 ${activeSection === Sections.Projects ? "md:w-24 bg-[#64ffda]" : "md:w-4 bg-white"}`}
                    />
                    <a className={`ml-0 md:ml-2 ${activeSection === Sections.Projects ? "text-[#64ffda]" : ""}`}
                        href="#Projects"
                    >Projects</a>
                </li>

                <li className="flex">
                    <hr
                        className={`w-0 hr-expand my-3 h-1 rounded-lg border-0 ${activeSection === Sections.Experience ? "md:w-24 bg-[#64ffda]" : "md:w-4 bg-white"}`}
                    />
                    <a className={`ml-0 md:ml-2 ${activeSection === Sections.Experience ? "text-[#64ffda]" : ""}`}
                        href="#Experience"
                    >Experience</a>
                </li>

                <li className="flex">
                    <hr
                        className={`w-0 hr-expand my-3 h-1 rounded-lg border-0 ${activeSection === Sections.Extras ? "md:w-24 bg-[#64ffda]" : "md:w-4 bg-white"}`}
                    />
                    <a className={`ml-0 md:ml-2 ${activeSection === Sections.Extras ? "text-[#64ffda]" : ""}`}
                        href="#Extras"
                    >Extras</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
