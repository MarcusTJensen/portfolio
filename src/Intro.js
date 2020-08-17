import React, {useState, useEffect} from "react";
import "./Intro.scss";

const Intro = (props) => {
    return(
        <div class="introContainer" ref={props.reference}>
            <div className="contentContainer" id="leftContainer">
                <div className="images">
                    <img src={process.env.PUBLIC_URL + "/Apple-logo.png"} height="200" />
                    <img src={process.env.PUBLIC_URL + "/angular.png"} height="200" />
                    <img src={process.env.PUBLIC_URL + "/320px-React-icon.png"} height="200" />
                    <img src={process.env.PUBLIC_URL + "/872px-Android_robot.png"} height="200" />
                </div>
            </div>
            <div className="contentContainer">
                <h1 className="title">About me</h1>
                <p className="bio">I am a developer!</p>
            </div>
        </div>
    );
}

export default Intro;