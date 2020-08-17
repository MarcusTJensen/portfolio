import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import Intro from "./Intro";
import Projects from "./Projects";

function App() {

  const aboutMe = useRef(null);
  const projects = useRef(null);

  const [activePage, setActivePage] = useState("aboutMe");
  const [headerStyle, setHeaderStyle] = useState({color: "#0f1c70"});
  const [headerStyleActive, setHeaderStyleActive] = useState({borderBottom: "2px solid", color: headerStyle});

  const scrollToRef = (ref, page) => {
    window.scrollTo(0, ref.current.offsetTop);
    if(page === "projects") {
      setHeaderStyle({color: "#ff4676"});
      setHeaderStyleActive({color: "#ff4676", borderBottom: "2px solid"});
      setActivePage("projects");
    } else if(page === "aboutMe") {
      setHeaderStyle({color: "#0f1c70"});
      setHeaderStyleActive({borderBottom: "2px solid", color: "#0f1c70"});
      setActivePage("aboutMe");
    }
  }

  const changeColorOnScroll = () => {
    if(window.offsetTop === aboutMe.current.offsetTop) {
      setHeaderStyle({color: "#0f1c70"});
      setHeaderStyleActive({borderBottom: "2px solid", color: "#0f1c70"});
      setActivePage("aboutMe");
    }
  }

  useEffect(() => {
    console.log(projects);
  }, [])

  return (
    <div className="App" onScroll={changeColorOnScroll}>
      <div className="header">
        <p className="option" style={activePage === "aboutMe" ? headerStyleActive : headerStyle} onClick={() => scrollToRef(aboutMe, "aboutMe")}>About me</p>
        <p className="option" style={activePage === "projects" ? headerStyleActive : headerStyle} onClick={() => scrollToRef(projects, "projects")}>My projects</p>
        <p className="option" style={headerStyle}>Contact info</p>
      </div>
      <Intro reference={aboutMe} />
      <Projects reference={projects} />
    </div>
  );
}

export default App;
