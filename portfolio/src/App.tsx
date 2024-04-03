import './App.css';

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function App() {

    return (
        <div className="App flex flex-col gap-10 m-4 text-lg md:flex-row">
            <div className="header min-w-92 flex-none">
                <Header />
            </div>

            <div className="content min-w-screen-md max-w-screen-md flex flex-col gap-20">
                <About />
                <Projects />
                <Experience />
            </div>
        </div>
    );
}
