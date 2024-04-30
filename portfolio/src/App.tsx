import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import { Sections } from "./components/Content/ScrollContext";
import Header from "./components/Content/Header";
import Content from "./components/Content/Content";
import FauxHollows from "./components/Extras/FauxHollowsSolver/FauxHollows";


const App = () => {
    const [activeSection, setActiveSection] = useState(Sections.About);

    const handleScroll = () => {
        const contentDiv = document.querySelector(".App");
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
        const contentDiv = document.querySelector(".App");
        contentDiv?.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <BrowserRouter>
            <div className="App flex flex-col m-4 text-lg lg:flex-row justify-center">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header activeSection={activeSection} showNavSection={true} />
                            <Content />
                        </>
                    } />
                    <Route path="/FauxHollows" element={
                        <>
                            {window.scrollTo(0, 0)}
                            <Header showNavSection={false} />
                            <FauxHollows />
                        </>
                    } />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;


