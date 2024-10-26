import React from "react";
import { Routes, Route} from "react-router-dom";
//Pages
import Home from "./pages/Home";
import DegreeAndCertificate from "./pages/DegreeAndCertificate";
import JustForLaughs from "./pages/Laugh";
import PageNotFound from "./pages/PageNotFound";
import Play from "./pages/SeeMore";
import Blogs from "./pages/Blogs";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Visitors from "./pages/Visitors";
//Components
import Layout from "./components/Layout";
//Styling
import "./styling/about.css"
import "./styling/home.css"
import "./styling/layout.css"
import "./styling/navbar.css"
import "./styling/skills.css"
import "./styling/visitors.css"
import "./styling/resume.css"
import "./styling/construction.css"
import "./styling/laugh.css"
import "./styling/heist.css"
import "./styling/seeMore.css"
import "./styling/blogs.css"

function App() {
  return (
      <>
        <Routes>
          <Route element={<Layout/>}>
          <Route path="/degreeAndcertificate" element={<DegreeAndCertificate />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/laugh" element={<JustForLaughs/>} /> */}
          {/* <Route path="/personal" element={<Play />} /> */}
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="*" element={<PageNotFound />} />          
          </Route>
        </Routes>
      </>
  );
}

export default App;
