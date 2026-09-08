import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Separator from "./Separator";
import { cn } from "../../lib/utils";

export default function Experience() {
  return (
    <div>
      <h2 className="font-extrabold text-3xl">EXPERIENCE & EDUCATION</h2>
      <hr className="h-1 bg-gray-100 border-0 rounded dark:bg-gray-700" />
      <ExperienceEntry
        experienceType={(t) => t.Experience}
        title="Full Stack Developer"
        start_date={{ year: 2024, month: MonthEntry.September }}
        end_date={{ year: 0, month: MonthEntry.Current }}
        company="City Tele Coin"
        summary={
          "Developing and deploying full-stack applications serving thousands of customers," +
          " with a focus on accessibility and modern DevOps practices."
        }
        bullets={[
          "Built and modernized a multi-tenant Business Management System and E-Commerce platform" +
            " from the ground-up using ASP.NET Core and C#. Improving scalability, maintainability," +
            " and support for complex facility-wide transactions and inventory management",
          "Created and improved local development automation tools cutting environment setup time by" +
            " over 60% and accelerating onboarding for new engineers and developers",
          "Defined and rolled out coding standards and engineering best practices " +
            "(e.g. clean architecture and SOLID principles)," +
            " improving consistency, readability, and long-term maintainability of the code",
          "Developed an authorization system leveraging ASP.NET Core and Redis for session management," +
            " RESTful APIs for secure data transmission, and cookies for client-side persistence",
          "Contributed to frontend design by building UI wireframes, mockups, and implementing reusable" +
            " components using TypeScript, Tailwind CSS, Bootstrap, and Next.JS",
          "Integrated third-party payment gateways for order processing, enabling secure and efficient " +
            "transactions with accurate product inventory tracking",
          "Wrote detailed technical documentation and system flowcharts to clearly communicate architecture" +
            " decisions and processes",
          "Collaborated cross-functionally with product managers, QA, and DevOps periodically in an " +
            "Agile environment to prioritize work, run efficient sprints, and ship high-impact features",
          "Used PostgreSQL and MongoDB to support both relational and document-based data needs ensuring " +
            "performance and flexibility for a multi-facility system supporting thousands of concurrent users",
        ]}
      />

      <Separator />
      <ExperienceEntry
        experienceType={(t) => t.Experience}
        title="Unit Deployment Manager"
        start_date={{ year: 2016, month: MonthEntry.February }}
        end_date={{ year: 2018, month: MonthEntry.March }}
        company="USAF"
        summary={
          "Managed deployment operations and readiness for 170+ personnel," +
          " coordinating mission-critical logistics and serving as liaison between unit leadership and" +
          " base deployment officers."
        }
        bullets={[
          "Constructed, maintained, and monitored readiness/status of 170 personnel" +
            " and served as a point of contact for the Unit Commander and base installation deployment officers.",
          "Aggregated and consolidated information to report to both the unit and wing commanders.",
          "Coordinated with country-wide, local, and base security/police enforcement regarding the" +
            " transportation of mission-critical items from base operations to deployment environments.",
          "Compiled, established, and maintained continuity for squadron operations",
        ]}
      />

      <Separator />
      <ExperienceEntry
        experienceType={(t) => t.Experience}
        title="Client Systems Technician"
        start_date={{ year: 2011, month: MonthEntry.April }}
        end_date={{ year: 2016, month: MonthEntry.February }}
        company="USAF"
        summary={
          "Served as the central hub for base-level IT systems management, supporting both " +
          "classified and unclassified networks while providing technical support and systems administration " +
          "for hundreds of users."
        }
        bullets={[
          "Managed the central focal point for base-level IT systems management with both unclassified and " +
            "classified networks.",
          "Managed call flow and responded to technical needs of customers while resolving customer " +
            "complaints and concerns with strong verbal and negotiation skills.",
          "Maintained composure and patience in the face of difficult customer situations while " +
            "demonstrating professionalism and courtesy.",
          "Configured and administered end user computing devices, network printers, mobile devices," +
            " VPN connectivity, workstation and network connectivity, system settings and operating " +
            "system installation and management for client systems.",
          "Created and managed network/local accounts, policy management and implementation, and access rights management.",
        ]}
      />
      <ExperienceEntry
        experienceType={(t) => t.Education}
        title="Software Engineering (BS)"
        start_date={{ year: 2018, month: MonthEntry.August }}
        end_date={{ year: 2024, month: MonthEntry.May }}
        company="ASU"
        summary={
          "Completed a Bachelor of Science in Software Engineering at Arizona State University," +
          " with coursework focused on software design, development methodologies, systems fundamentals," +
          " programming languages, databases, and engineering-driven software development."
        }
        bullets={[
          "Built a foundation in data structures and algorithms, programming languages, database management," +
            " and computer systems fundamentals.",
          "Completed upper-division coursework in distributed software systems, operating systems, secure " +
            "software systems, and software enterprise/project management.",
          "Studied engineering-focused mathematics and science including discrete mathematics, calculus, " +
            "linear algebra, probability/statistics, and physics.",
          "Worked through a project-driven curriculum emphasizing hands-on software development, teamwork, " +
            "communication, and critical thinking.",
        ]}
      />
    </div>
  );
}

enum MonthEntry {
  Current = "Current",
  January = "JAN",
  February = "FEB",
  March = "MAR",
  April = "APR",
  May = "MAY",
  June = "JUN",
  July = "JUL",
  August = "AUG",
  September = "SEP",
  October = "OCT",
  November = "NOV",
  December = "DEC",
}

type DateEntry = {
  year: number;
  month: MonthEntry;
};

function DateDisplay({ year, month }: DateEntry) {
  return (
    <>
      {month.toString()} {year === 0 ? "" : year}
    </>
  );
}

enum ExperienceType {
  Experience = "Experience ",
  Education = "Education ",
}

type ExperienceProps = {
  experienceType: (t: typeof ExperienceType) => ExperienceType;
  title: string;
  start_date: DateEntry;
  end_date: DateEntry;
  company: string;
  summary: string;
  bullets: string[];
};

function ExperienceEntry({
  experienceType,
  title,
  start_date,
  end_date,
  company,
  summary,
  bullets,
}: ExperienceProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const selectedExperienceType = React.useMemo(
    () => experienceType(ExperienceType),
    [experienceType],
  );

  return (
    <div
      className={cn(
        "ml-2 cursor-pointer select-none p-3 rounded-2xl hover:bg-sky-100/5",
        "transition-all duration-300 ease-in-out",
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center uppercase font-extrabold text-sky-600 text-2xl">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faChevronDown}
            className={cn(
              "text-slate-400 transition-transform duration-300 ease-in-out",
              isOpen ? "rotate-0" : "-rotate-90",
            )}
          />
          <h3>{title}</h3>
        </div>
        <h4 className="text-sky-950 dark:text-sky-300">{company}</h4>
      </div>
      <h4 className="uppercase font-extrabold text-neutral-500 text-xl flex justify-between w-full">
        <div>{selectedExperienceType}</div>
        <div>
          {DateDisplay(start_date)}-{DateDisplay(end_date)}
        </div>
      </h4>
      <p className="text_entry mt-2">{summary}</p>
      <div
        className={cn(
          "grid transition-all duration-500 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ul className="ml-4 list-disc text-md">
            {bullets.map((bullet, index) => {
              return (
                <li key={index} className="text_entry mb-1 text-teal-500">
                  {bullet}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
