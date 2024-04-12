import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import { Sections } from "./components/Content/ScrollContext";
import Header from "./components/Content/Header";
import Content from "./components/Content/Content";
import FauxHollows from "./components/Extras/FauxHollowsSolver/FauxHollows";


const App = () => {
    const [activeSection, setActiveSection] = useState(Sections.About);

    return (
        <BrowserRouter>
            <div className="App flex flex-col m-4 text-lg lg:flex-row">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header activeSection={activeSection} showNavSection={true} />
                            <Content setActiveSection={setActiveSection} />
                        </>
                    } />
                    <Route path="/FauxHollows" element={
                        <>
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


