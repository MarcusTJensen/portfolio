import React, {useState, useEffect} from "react";
import "./Intro.scss";
import AboutMe from "./aboutMeString";

const Intro = (props) => {
    return(
        <div class="introContainer" ref={props.reference}>
            <div className="contentContainer" id="leftContainer">
                <div className="images">
                    <img src={process.env.PUBLIC_URL + "/Apple-logo.png"} className="introImg" />
                    <img src={process.env.PUBLIC_URL + "/angular.png"} className="introImg" />
                    <img src={process.env.PUBLIC_URL + "/320px-React-icon.png"} className="introImg" />
                    <img src={process.env.PUBLIC_URL + "/872px-Android_robot.png"} className="introImg" />
                </div>
            </div>
            <div className="contentContainer">
                <div>
                    <h1 className="title">About me</h1>
                    <p className="bio">{AboutMe}</p>
                </div>
            </div>
        </div>
    );
}

export default Intro;
