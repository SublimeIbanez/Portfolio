import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="cursor-pointer select-none p-3 rounded-2xl hover:bg-sky-100/5 transition-all duration-300 ease-in-out" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between items-center">
          <h2 className="font-extrabold text-3xl">
            ABOUT
          </h2>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-slate-400 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        <hr className="h-1 bg-gray-100 border-0 rounded dark:bg-gray-700" />
        <p className="text_entry mt-2">
          7-year Air Force veteran turned full-stack software engineer specializing in C#/.NET, React, and TypeScript. Building accessible applications, contributing to NASA projects, and creating open-source tools for developers.
        </p>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[600px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
          <p className="text_entry mb-3">
            I'm a 7-year United States Air Force veteran with extensive experience in defense IT operations and systems management. During my service, I managed classified networks, coordinated mission-critical operations as a Unit Deployment Manager, and maintained systems for hundreds of personnel across both classified and unclassified environments. The military instilled in me a strong foundation in discipline, sense of security, and high-pressure problem-solving.
          </p>
          <p className="text_entry mb-3">
            After transitioning out of service, I earned my Software Engineering degree from Arizona State University and shifted my focus to full-stack development. I work across the entire stack—from React and TypeScript frontends to C#/.NET backends—with a particular emphasis on security, performance optimization, and user and developer experience.
          </p>
          <p className="text_entry mb-3">
            Currently, I'm a Full Stack Developer at City Tele Coin, building accessibility-focused kiosk applications that serve thousands of customers, deployed with Kubernetes and Docker. I've also contributed to a web-based game developed for NASA's Psyche mission, working directly with mission representatives as a core developer and team lead, and worked on ByteCrypt, an encrypted cloud storage solution. In my spare time, I create open-source Rust libraries like Logfather (a customizable logging system) and Dekor (a terminal styling library) that are used by developers worldwide.
          </p>
          <p className="text_entry">
            I'm driven by solving complex technical challenges and building tools that empower other developers. Whether it's implementing OAuth integrations, optimizing database performance, or designing developer tooling, I bring military-grade discipline and attention to detail to every project.
          </p>
        </div>
      </div>
    </div>
  )
}
