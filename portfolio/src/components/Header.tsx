import { useState } from "react";

import { keepTheme, setTheme } from "./theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Mode_Dark from "../images/dark_mode.svg";
import Mode_Light from "../images/light_mode.svg";
import Underline from "../images/header_slash.svg";


export default function Header() {
    const [theme, setMode] = useState(keepTheme);

    const toggleMode = () => {
        setTheme({ themeName: theme == "theme-dark" ? "theme-light" : "theme-dark", setThemeName: setMode });
    };

    return (
        <>
            <img src={Underline} className="w-auto -mb-12 mt-10 z-10" />
            <div className="flex">
                <a className="text-5xl min-w-full" href="#">
                    Joshua Benn
                </a>
            </div>
            <div className="flex sm:flex-col justify-between">
                <div className="social flex gap-3 mt-1">
                    <img className="mt-1 h-[20px] w-auto" src={theme == "theme-dark" ? Mode_Light : Mode_Dark}
                        alt="Mode Selection" onClick={toggleMode} />

                    <a href="https://github.com/JoshBenn">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/joshua-benn/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="mailto:joshbenn@protonmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
                <h3 className="text-2xl text-slate-400 text-end">Software Engineer</h3>
            </div>
        </>
    );
}

                    // <FontAwesomeIcon icon={theme == "theme-dark" ? faSun : faMoon} onClick={toggleMode} className="mt-1" />

