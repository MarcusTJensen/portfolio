import React, { useEffect, useState } from "react";
import "./ContactInfo.scss";

const ContactInfo = (props) => {
    return (
        <div className="containerContactInfo" ref={props.reference}>
            <div className="imgContainer" id="leftContainerContact">
                <div className="containerStart">
                    <div className="contactRow" id="firstContactRow">
                        <img src={process.env.PUBLIC_URL + "/linkedin_logo.png"} height="50" className="contactLogo" />
                        <a className="contactLink" href="https://linkedin.com/in/MarcusTJensen" target="_blank">linkedin.com/in/MarcusTJensen</a>
                    </div>
                    <div className="contactRow">
                        <img src={process.env.PUBLIC_URL + "/github_logo.png"} height="50" className="contactLogo" />
                        <a className="contactLink" href="https://github.com/marcustjensen" target="_blank">github.com/marcustjensen</a>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <div className="containerStart">
                    <div className="contactRow" id="firstContactRow">
                        <img src={process.env.PUBLIC_URL + "/email_logo.png"} height="50" className="contactLogo" />
                        <a className="contactLink">marcus.tveide.jensen@hotmail.com</a>
                    </div>
                    <div className="contactRow">
                        <img src={process.env.PUBLIC_URL + "/phone_logo.png"} height="55" className="contactLogo" />
                        <a className="contactLink">+47 98 08 54 87</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
