import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/utils";

export default function About() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div>
      <h2 className="font-extrabold text-3xl">ABOUT</h2>
      <hr className="h-1 bg-gray-100 border-0 rounded dark:bg-gray-700" />
      <div
        className={cn(
          "cursor-pointer select-none p-3 rounded-2xl hover:bg-sky-100/5",
          "transition-all duration-300 ease-in-out relative",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          className={cn(
            "absolute top-3 left-3 text-slate-400 transition-transform duration-300 ease-in-out",
            isOpen ? "rotate-0" : "-rotate-90",
          )}
        />
        <p className="text_entry pl-8">
          United States Air Force veteran of 7 years turned software engineer
          specializing in full-stack development, database system management,
          and developer tooling. I thrive in building accessible applications
          and tooling.
        </p>
        <div
          className={cn(
            "grid transition-all duration-500 ease-in-out",
            isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <p className="text_entry mb-3">
              I'm a 7-year United States Air Force veteran with extensive
              experience in defense IT operations and systems management. During
              my service, I managed unclassified and classified networks;
              coordinated mission-critical operations as a Unit Deployment
              Manager; and maintained systems for hundreds of personnel across
              both classified and unclassified environments. The military
              instilled in me a strong foundation in discipline, sense of
              security, and high-pressure problem-solving.
            </p>
            <p className="text_entry mb-3">
              After transitioning out of service, I earned my Software Engineering
              (B.S.) degree from Arizona State University and shifted my focus to
              full-stack and tooling development. I work across the entire stack
              with a particular emphasis on security, performance optimization,
              and user/developer experience.
            </p>
            <p className="text_entry mb-3">
              Currently, I'm a Full Stack Developer at City Tele Coin, building
              out the backend and muliple frontends for an accessibility-focused
              commissary and facility management applications which serve
              thousands of customers. The backend is built with C# (utilizing
              ASP.NET, EFCore, PostGreSQL, and Docker), and deployed with
              Kubernetes. The frontend(s) are composed using various frameworks
              using TypeScript such as NextJS and Vite.
            </p>
            <p className="text_entry mb-3">
              I've also contributed to a web-based game developed for NASA's
              Psyche mission, working directly with mission representatives as a
              core developer and team lead. Built with Unity using C# as its
              primary language and Agile with Sprints as our development
              methodology.
            </p>
            <p className="text_entry">
              I'm driven by solving complex technical challenges and building
              tools that empower other developers. Even for open source, I bring
              military-grade discipline and attention to detail to every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
