import React, { useEffect } from "react";

import { Sections, ActiveSectionProps } from "./ScrollContext";
import { HeaderProps } from "./Header";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Extras from "../Extras/Extras";
import Footer from "./Footer";

const Content: React.FC<ActiveSectionProps & HeaderProps> = ({ setActiveSection }) => {
    const handleScroll = () => {
        const contentDiv = document.querySelector(".content");
        const scrollPosition = contentDiv!.scrollTop / 2;
        const sections = [Sections.About, Sections.Projects, Sections.Experience, Sections.Extras]

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                const top = rect.top;
                const bottom = rect.bottom;


                if (top <= scrollPosition! && bottom >= scrollPosition!) {
                    setActiveSection!(section);
                }
            }
        });
    }

    useEffect(() => {
        const contentDiv = document.querySelector(".content");
        contentDiv?.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const contentDiv = document.querySelector(".content");
        contentDiv?.addEventListener("click", handleScroll);

        return () => window.removeEventListener("click", handleScroll);
    }, []);

    return (
        <div className="content lg:py-24 lg:h-[95dvh] h-[70dvh] max-w-screen-md flex flex-col gap-20">
            <section id={Sections.About}><About /></section>
            <section id={Sections.Projects}><Projects /></section>
            <section id={Sections.Experience}><Experience /></section>
            <section id={Sections.Extras}><Extras /></section>
            <section id={"Footer"}><Footer /></section>
        </div>
    );
}

export default Content;
