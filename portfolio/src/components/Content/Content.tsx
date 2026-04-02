import { Section } from "./ScrollContext";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";

export interface ContentProps {
  setSectionRef: (section: Section) => (element: HTMLElement | null) => void;
}

const Content: React.FC<ContentProps> = ({ setSectionRef }) => {
  return (
    <div className="content lg:py-24 lg:h-[95dvh] h-[70dvh] max-w-screen-md flex flex-col gap-20">
      <section id={Section.About} ref={setSectionRef(Section.About)}>
        <About />
      </section>
      <section id={Section.Experience} ref={setSectionRef(Section.Experience)}>
        <Experience />
      </section>
      <section id={Section.Projects} ref={setSectionRef(Section.Projects)}>
        <Projects />
      </section>
    </div>
  );
};

export default Content;
