import { Sections } from "./ScrollContext";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Extras from "../Extras/Extras";

const Content = () => {

    return (
        <div className="content lg:py-24 lg:h-[95dvh] h-[70dvh] max-w-screen-md flex flex-col gap-20">
            <section id={Sections.About}><About /></section>
            <section id={Sections.Projects}><Projects /></section>
            <section id={Sections.Experience}><Experience /></section>
            <section id={Sections.Extras}><Extras /></section>
        </div>
    );
}

export default Content;
