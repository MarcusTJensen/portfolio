import React, { useEffect, useState } from 'react';
import './DetailView.scss';
import { useHistory, useLocation } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import gro from "./projects/gro";
import RepositoryItem from "./components/RepositoryItem";
import sightzing from "./projects/sightzing";
import crossPlatformExam from "./projects/crossPlatformExam";
import iOSExam from "./projects/iOSExam";
import photonAlarm from "./projects/photonAlarm";
import javaExam from "./projects/javaExam";
import kotlinExam from "./projects/kotlinExam";

const DetailView = (props) => {

    const history = useHistory();
    const location = useLocation();
    const project = location.state.project;
    const [prevProj, setPrevProj] = useState();

    useEffect(() => {
        setPrevProj(location.state.project);
        console.log(location.state.project);
        if(prevProj !== project) {
            window.scrollTo(0, 0);
        }
    }, [location.state]);

    const projects = [
        gro,
        crossPlatformExam,
        iOSExam,
        photonAlarm,
        javaExam,
        sightzing,
        kotlinExam
    ];

    const formatTechs = (str) => {
        let upperCaseCh;
        let stringUpdated;
        for (let ch of str) {
            if(str.indexOf(ch) === 0) {
                stringUpdated= ch.toUpperCase() + str.slice(1)
            }
            if(ch.toUpperCase() === ch) {
                upperCaseCh = ch;
            }
        }
        const upperCasePos = stringUpdated.indexOf(upperCaseCh);
        const output = [stringUpdated.slice(0, upperCasePos), " ", stringUpdated.slice(upperCasePos)].join('');
        return upperCaseCh ? output : stringUpdated;
    };

    return(
        <div className="detailViewContainer">
            <img src={require(`./images/${project.name}/${project.name}header.${project.fileType}`)} className="mainImg" />
            <div className="textDiv">
                <h1 className="projectInfo" id="title">{project.name}</h1>
                <h2 className="projectInfo" id="description">{project.descriptionShort}</h2>
                <div className="infoListDiv" style={{marginTop: "4vh"}}>
                    <p className="generalInfo" id="infoTitle">Technologies:</p>
                    {
                        project.technologies.map((tech) => {
                            const value = formatTechs(tech);
                            return(
                                project.technologies.length === 0 ?
                                <p className="generalInfo" id="infoValue"> {value}</p> :
                                    project.technologies.length !== 0 && tech !== project.technologies[project.technologies.length - 1] ?
                                        <p className="generalInfo" id="infoValue"> {value},</p> :
                                        <p className="generalInfo" id="infoValue"> {value}</p>
                            );
                        })
                    }
                </div>
                <div className="infoListDiv">
                    <p className="generalInfo" id="infoTitle">Created:</p>
                    <p className="generalInfo" id="infoValue"> {project.created}</p>
                </div>
                {project.role ?
                    <div className="infoListDiv">
                        <p className="generalInfo" id="infoTitle">Role:</p>
                        <p className="generalInfo" id="infoValue"> {project.role}</p>
                    </div> : null
                }
                {project.link ?
                    <div className="infoListDiv">
                        <p className="generalInfo" id="infoTitle">Link:</p>
                        <p className="generalInfo" id="infoValue"><a className="projectInfo" target="blank" href={`https://${project.link}`}>{project.link}</a></p>
                    </div> : null
                }
                {project.github ?
                    <div className="infoListDiv">
                        <p className="generalInfo" id="infoTitle">Github:</p>
                        <p className="generalInfo" id="infoValue"><a className="projectInfo" target="blank" href={`https://${project.github}`}>{project.github}</a></p>
                    </div> : null
                }
                {project.descriptionLong ?
                    <div className="bioDiv">
                    {
                        project.descriptionLong.map((str) => (
                        <p className="projectInfo" id="descriptionLong">{str}</p>
                        ))
                    }
                    </div> : null
                }
            </div>
            { project.images ?
                <div className="projectsDiv">
                    {
                        project.images.map((img) => (
                            <img className="screenshot" src={require(`./images/${project.name}/${img}`)} />
                        ))
                    }
                </div> : null
            }
            <p className="projectInfo" id="projectsTitle">My other projects: </p>
            <div className="projectsDiv">
                {
                    projects.map((project) => {
                        return (
                            <div className={window.innerHeight < window.innerWidth ? "projectItemContainer" : "projectItemContainerMobile"}>
                                <RepositoryItem
                                    id={projects.indexOf(project)}
                                    name={project.name}
                                    description={project.descriptionShort}
                                    technologies={project.technologies}
                                    activeProject={project}
                                />
                            </div>
                        );
                    })
                }
            </div>
            <IoIosClose size="2.5vw" className="backBtn" onClick={() => history.push("/")} />
        </div>
    );
};

export default DetailView;
