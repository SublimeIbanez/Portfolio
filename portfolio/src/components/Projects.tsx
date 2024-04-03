import { ReactNode } from "react";
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
                body="Lightweight application, developed in rust, that allows users to encrypt their local data and upload it to and through various cloud services."
                skills={["Rust", "SQL", "Cryptography", "Go", "React", "JavaScript", "REST", ]}
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
                        url: "https://github.com/JoshBenn/logfather",
                    },
                    {
                        site: Site.Crates,
                        url: "https://crates.io/crates/logfather",
                    },
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
                        site: Site.Website,
                        url: "https://missiontopsyche.github.io/tungsten_12a_web_game-se/M.I.S.T/",
                    }
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
}

function Project({ title, role, body, skills, links }: ProjectProps) {
    return (
        <>
            <div className="ml-2">
                <div className="flex gap-3">
                    <h3 className="text-2xl font-extrabold text-sky-600">{title}</h3>
                    {
                        links?.map((link) => {
                            return (Link(link))
                        })
                    }
                </div>
                <h5 className="text-m text-neutral-600">{role}</h5>
                <p className="text_entry">{body}</p>
                {SkillsList({ skills })}
            </div>
        </>
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
                        <span className="rounded-full mr-1 pl-2 pr-2 text-sm font-bold bg-emerald-900 bg-opacity-70 text-green-300">{skill}</span>
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

