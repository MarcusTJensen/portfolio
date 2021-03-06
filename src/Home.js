import React, { useEffect, useState, useRef } from "react";
import Intro from "./Intro";
import Projects from "./Projects";
import ContactInfo from "./ContactInfo";
import { useLocation } from "react-router-dom";

const Home = (props) => {

    const [activePage, setActivePage] = useState("aboutMe");

  const aboutMe = useRef(null);
  const projects = useRef(null);
  const container = useRef(null);
  const contact = useRef(null);
  const location = useLocation();

  const activeHeaderStyle = {
    borderBottom: "2px solid #777777",
    fontWeight: "bolder"
  };

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: `smooth`
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => changeColorOnScroll(window.pageYOffset));
  }, []);

  const changeColorOnScroll = (windowOffset) => {
      if(projects.current !== null) {
          if (windowOffset >= projects.current.offsetTop && windowOffset < contact.current.offsetTop) {
              setActivePage("projects");
          } else if (windowOffset >= aboutMe.current.offsetTop && windowOffset < projects.current.offsetTop) {
              setActivePage("aboutMe");
          } else if (windowOffset >= contact.current.offsetTop && windowOffset > projects.current.offsetTop) {
              console.log(contact.current.offsetTop, projects.current.offsetTop)
              setActivePage("contact");
          }
      }
  }

    return(
        <div className="App">
            <div className="header">
                <p className="option" style={
                    activePage === "aboutMe" ?
                    activeHeaderStyle : null
                } onClick={() =>{
                    scrollToRef(aboutMe);
                }}>About me</p>
                <p className="option" style={
                    activePage === "projects" ?
                    activeHeaderStyle : null
                } onClick={() => {
                    scrollToRef(projects);
                }}>My projects</p>
                <p className="option" style={
                    activePage === "contact" ?
                    activeHeaderStyle : null
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

export default Home;