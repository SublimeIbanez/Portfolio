import { useEffect, useState } from "react";

import { keepTheme, setTheme } from "./theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Header_DarkMode from "../images/Header_DarkMode.svg";
import Header_LightMode from "../images/Header_LightMode.svg";
import Mode_Dark from "../images/dark_mode.svg";
import Mode_Light from "../images/light_mode.svg";

export default function Header() {
    const [theme, setMode] = useState(keepTheme);

    useEffect(() => {
        setTheme({ themeName: window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light", setThemeName: setMode });
    }, []);

    const toggleMode = () => {
        setTheme({ themeName: theme == "dark" ? "light" : "dark", setThemeName: setMode });
    };

    return (
        <>
            <div className="flex">
                <a className="text-5xl min-w-full" href="#">
                    <img src={theme === "dark" ? Header_DarkMode : Header_LightMode} />
                </a>
            </div>
            <div className="flex flex-col justify-between">
                <div className="social flex gap-3 mt-1">
                    <a href="https://github.com/JoshBenn">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/joshua-benn/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="mailto:joshbenn@protonmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    
                    <img className="mt-1 h-[20px] w-auto ml-3 pl-4 border-l-2 border-slate-600" src={theme === "dark" ? Mode_Light : Mode_Dark}
                        alt="Mode Selection" onClick={toggleMode} />
                </div>
                <h3 className="text-2xl text-slate-400 text-end">Software Engineer</h3>
            </div>
        </>
    );
}
