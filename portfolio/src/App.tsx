import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Section,
  useSectionVisibility,
} from "./components/Content/ScrollContext";
import Header from "./components/Content/Header";
import Content from "./components/Content/Content";

import "./App.css";

const App = () => {
  const { sectionInfoMap, setSectionRef } = useSectionVisibility([
    Section.About,
    Section.Projects,
    Section.Experience,
  ]);

  return (
    <BrowserRouter>
      <div className="App flex flex-col m-4 text-lg lg:flex-row justify-center">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header sectionInfoMap={sectionInfoMap} showNavSection={true} />
                <Content setSectionRef={setSectionRef} />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
