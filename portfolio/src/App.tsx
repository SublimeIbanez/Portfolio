import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Solver from "./Extras/FauxHollowsSolver/FauxHollows";
import Extras from "./Extras/Extras";
import { ActiveSectionProps, Sections } from "./components/ScrollContext";


const App = () => {
    const [activeSection, setActiveSection] = useState(Sections.About);

    return (
        <BrowserRouter>
                <div className="App flex flex-col m-4 text-lg lg:flex-row">
                    <div className="header min-w-92 flex-none mr-10">
                        <Header activeSection={activeSection} />
                    </div>
                    <Routes>
                        <Route path="/" element={<Content activeSection={activeSection} setActiveSection={setActiveSection} />} />
                        <Route path="/FauxHollows" element={<Solver />} />
                    </Routes>
                </div>
        </BrowserRouter>
    );
}
export default App;


const Content = ({ setActiveSection }: ActiveSectionProps) => {
    const handleScroll = () => {
        const contentDiv = document.querySelector(".content");
        const scrollPosition = contentDiv?.scrollTop;
        const sections = [Sections.About, Sections.Projects, Sections.Experience, Sections.Extras]

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                const top = rect.top;
                const bottom = rect.bottom;


                if (top <= scrollPosition! && (bottom >= scrollPosition! || section == Sections.Extras)) {
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
        <div className="content max-w-screen-md flex flex-col gap-20 lg:h-[95dvh] h-[70dvh]">
            <section id={Sections.About}><About /></section>
            <section id={Sections.Projects}><Projects /></section>
            <section id={Sections.Experience}><Experience /></section>
            <section id={Sections.Extras}><Extras /></section>
            <Footer />
        </div>
    );
}
