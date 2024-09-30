import { ReactNode, useState } from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Separator from "./Separator";


export default function Projects() {

    return (
        <div className="flex flex-col">
            <h2 className="font-extrabold text-3xl">PROJECTS</h2>
            <hr className="h-1 bg-gray-100 border-0 rounded dark:bg-gray-700" />
            <Project
                title="ByteCrypt"
                role="Core Contributor"
                body="Lightweight application that allows users to encrypt their local data and upload it to and through various cloud services."
                skills={["Rust", "SQL", "Cryptography", "Go", "React", "Typescript", "REST",]}
                links={[
                    {
                        site: Site.GitHub,
                        url: "https://github.com/ExtremelyRyan/ByteCrypt",
                    },
                    {
                        site: Site.Website,
                        url: "https://www.thebytecrypt.com/",
                    },
                ]}
                collapseSection={[
                    { mainText: "Co-lead on overall design and architecture of the program." },
                    {
                        mainText: "Major driver in core feature design including:",
                        innerText: [
                            { mainText: "OAuth integration and verification." },
                            { mainText: "Custom configuration implementation." },
                            { mainText: "Centralized design logic flow." },
                            { mainText: "Database configuration and management." }
                        ]
                    },
                    { mainText: "Created custom library for performance testing encryption on varying file sizes and types." },
                ]}
            />

            <Separator />
            <Project
                title="NASA: M.I.S.T"
                role="Core Contributor"
                body="Web-based game developed for NASA's Psyche mission."
                skills={["C#", "Unity", "DevOps", "Agile"]}
                links={[
                    {
                        site: Site.GitHub,
                        url: "https://github.com/MissionToPsyche/tungsten_12a_web_game-se",
                    },
                    {
                        site: Site.Website,
                        url: "https://missiontopsyche.github.io/tungsten_12a_web_game-se/M.I.S.T/",
                    }
                ]}
                collapseSection={[
                    { mainText: "Core developer and designer of the game and its system." },
                    { mainText: "Focused on backend functionality and developer tooling."},
                    { mainText: "Created core functionaliity for many systems in widespread use throughout the game." },
                    { mainText: "Team leader and Lead Developer." },
                ]}
            />

            <Separator />
            <Project
                title="Logfather"
                role="Creator"
                body="Highly customizable, lightweight logging system for rust applications used in development and deployment environments - configurable for terminal and file output."
                skills={["Rust"]}
                links={[
                    {
                        site: Site.GitHub,
                        url: "https://github.com/SublimeIbanez/logfather",
                    },
                    {
                        site: Site.Crates,
                        url: "https://crates.io/crates/logfather",
                    },
                ]}
                collapseSection={[
                    { mainText: "Developed the library for logging information on both terminal and file outputs." },
                    { mainText: "Ensures the core focus was customizability - almost any aspect can easily be customized."},
                    { mainText: "Ensures thread safety." },
                    { mainText: "Comprehensively documented." },
                    { mainText: "Implemented features tailored to specifications requested by corporate clients." },
                ]}
            />

            <Separator />
            <Project
                title="Dekor"
                role="Creator"
                body="Simple character and styling library for terminal output in Rust projects."
                skills={["Rust"]}
                links={[
                    {
                        site: Site.GitHub,
                        url: "https://github.com/SublimeIbanez/dekor",
                    },
                    {
                        site: Site.Crates,
                        url: "https://crates.io/crates/dekor",
                    },
                ]}
                collapseSection={[
                    { mainText: "Developed the library for terminal outputs with an intention to provide a lightweight and easy-to-use tool for developers." },
                    { mainText: "Comprehensively documented." },
                ]}
            />
        </div>
    )
}

type ProjectProps = {
    title: string;
    role: string;
    body: ReactNode;
    bullets?: string[];
    img?: string;
    skills?: string[];
    links?: LinkProps[];
    collapseSection?: CollapseProps[];
}

type CollapseProps = {
    mainText?: string;
    innerText?: CollapseProps[];
}

const Collapsed: React.FC<CollapseProps> = ({ mainText, innerText }) => {
    return (
        <ul className="list-disc ml-6 text-base text-teal-500">
            <li>{mainText}</li>
            {innerText?.map((item, index) => (
                <Collapsed key={index} {...item} />
            ))}
        </ul>
    )
}

const Project: React.FC<ProjectProps & CollapseProps> = ({ title, role, body, skills, links, collapseSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => setIsOpen(!isOpen)}
            className={`project p-3 transform select-none duration-300 ease-in-out hover:-translate-y-1.5 hover:bg-sky-100/5 rounded-2xl cursor-pointer`}>
            <div className="flex gap-3">
                <h3 className="text-2xl font-extrabold text-sky-600">{title}</h3>
                {
                    links?.map((link) => {
                        return (Link(link))
                    })
                }
            </div>
            <h5 className="text-m dark:text-neutral-400 text-neutral-700 font-bold">{role}</h5>
            <p className="text_entry">{body}</p>
            <div className={`origin-top ${isOpen ? "scale-y-100 h-auto" : "scale-y-0 h-0"}`}>
                {collapseSection?.map((item, index) => (
                    <Collapsed key={index} {...item} />
                ))}
            </div>
            {SkillsList({ skills })}
        </div>
    )
}

type SkillProps = {
    skills?: string[];
}


function SkillsList({ skills }: SkillProps) {
    return (
        <div className="flex flex-wrap">
            {
                skills?.map((skill) => {
                    return (
                        <span className="rounded-full mr-1 pl-2 pr-2 text-sm bg-emerald-900 bg-opacity-70 text-green-200 mt-1">
                            {skill}
                        </span>
                    )
                })
            }
        </div>
    )
}

enum Site {
    GitHub = "GitHub",
    Crates = "Crates.io",
    Website = "Website",
    None = "",
}

type LinkProps = {
    site?: Site;
    url?: string;
}

function Link({ site, url }: LinkProps) {
    return (
        <a href={url} className="flex justify-items-end align-end gap-1 mt-1">
            <FontAwesomeIcon icon={faLink} className="mt-1" />
            <p className="text-sm mt-1">{site?.toString()}</p>
        </a>
    )
}


