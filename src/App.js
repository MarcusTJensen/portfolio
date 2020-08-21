import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import Intro from "./Intro";
import Projects from "./Projects";
import ContactInfo from "./ContactInfo";

function App() {

  const [activePage, setActivePage] = useState("aboutMe");

  const aboutMe = useRef(null);
  const projects = useRef(null);
  const container = useRef(null);
  const contact = useRef(null);

  const activeHeaderStyle = {
    borderBottom: "2px solid #ff4676",
    fontWeight: "bolder"
  };

  const contactHeaderStyle = {
    borderBottom: "2px solid #0f1c70",
    fontWeight: "bolder",
    color: "#0f1c70"
  };

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: `smooth`
    });
    //window.scrollTo(0, ref.current.offsetTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => changeColorOnScroll(window.pageYOffset));
  }, []);

  const changeColorOnScroll = (windowOffset) => {
    if(windowOffset >= projects.current.offsetTop && windowOffset < contact.current.offsetTop) {
      setActivePage("projects");
    } else if (windowOffset >= aboutMe.current.offsetTop && windowOffset < projects.current.offsetTop) {
      setActivePage("aboutMe");
    } else if (windowOffset >= contact.current.offsetTop && windowOffset > projects.current.offsetTop) {
      console.log(contact.current.offsetTop, projects.current.offsetTop)
      setActivePage("contact");
    }
  }

  return (
    <div className="App" ref={container} onClick={console.log(navigator.userAgent)}>
        <div className="header">
          <p className="option" style={
            activePage === "aboutMe" ?
            activeHeaderStyle :
            activePage === "contact" ?
            {color: "#0f1c70"} : null
          } onClick={() =>{
            scrollToRef(aboutMe);
          }}>About me</p>
          <p className="option" style={
            activePage === "projects" ?
            activeHeaderStyle :
            activePage === "contact" ?
            {color: "#0f1c70"} : null
          } onClick={() => {
            scrollToRef(projects);
          }}>My projects</p>
          <p className="option" style={
            activePage === "contact" ?
            contactHeaderStyle : null
          } onClick={() => {
            scrollToRef(contact);
          }}>Contact me</p>
        </div>
        <Intro reference={aboutMe} />
        <Projects reference={projects} />
        <ContactInfo reference={contact} />
    </div>
  );
}

export default App;
