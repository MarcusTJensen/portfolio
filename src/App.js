import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import Intro from "./Intro";
import Projects from "./Projects";

function App() {

  const [activePage, setActivePage] = useState("aboutMe");

  const aboutMe = useRef(null);
  const projects = useRef(null);
  const container = useRef(null);

  const activeHeaderStyle = {
    borderBottom: "2px solid #ff4676",
    fontWeight: "bolder"
  };

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  useEffect(() => {
    console.log(projects);
  }, []);

  return (
    <div className="App" ref={container} onScroll={() => console.log("zup G")}>
      <div className="header">
        <p className="option" style={activePage === "aboutMe" ? activeHeaderStyle : null} onClick={() =>{
          scrollToRef(aboutMe);
          setActivePage("aboutMe");
        }}>About me</p>
        <p className="option" style={activePage === "projects" ? activeHeaderStyle : null} onClick={() => {
          scrollToRef(projects);
          setActivePage("projects");
        }}>My projects</p>
        <p className="option">Contact info</p>
      </div>
      <Intro reference={aboutMe} />
      <Projects reference={projects} />
    </div>
  );
}

export default App;
