
export enum Sections {
  About = "About",
  Experience = "Experience",
  Projects = "Projects",
}

export interface ActiveSectionProps {
  activeSection?: Sections;
  setActiveSection?: React.Dispatch<React.SetStateAction<Sections>>;
}
