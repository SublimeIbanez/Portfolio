
export enum Sections {
    About = "About",
    Projects = "Projects",
    Experience = "Experience",
    Extras = "Extras",
}

export interface ActiveSectionProps {
    activeSection?: Sections;
    setActiveSection?: React.Dispatch<React.SetStateAction<Sections>>;
}
