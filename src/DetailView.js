import React, { useEffect } from 'react';
import './DetailView.scss';
import { useHistory, useLocation } from 'react-router-dom';

const DetailView = (props) => {

    const history = useHistory();
    const location = useLocation();
    const project = location.state.project;

    useEffect(() => {
        console.log(location.state.project);
    }, []);

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
            <img src={require(`./images/${project.name}/${project.name}header.${project.fileType}`)} height={500} className="mainImg" />
            <div className="textDiv">
                <h1 className="projectInfo" id="title">{project.name}</h1>
                <h2 className="projectInfo" id="description">{project.descriptionShort}</h2>
                <div className="infoListDiv" style={{marginTop: "4vh"}}>
                    <p className="projectInfo" id="infoTitle">Technologies:</p>
                    {
                        project.technologies.map((tech) => {
                            const value = formatTechs(tech);
                            return(
                                project.technologies.length === 0 ?
                                <p className="projectInfo" id="infoValue"> {value}</p> :
                                    project.technologies.length !== 0 && tech !== project.technologies[project.technologies.length - 1] ?
                                        <p className="projectInfo" id="infoValue"> {value},</p> :
                                        <p className="projectInfo" id="infoValue"> {value}</p>
                            );
                        })
                    }
                </div>
                <div className="infoListDiv">
                    <p className="projectInfo" id="infoTitle">Created:</p>
                    <p className="projectInfo" id="infoValue"> {project.created}</p>
                </div>
                {project.role ?
                    <div className="infoListDiv">
                        <p className="projectInfo" id="infoTitle">Role:</p>
                        <p className="projectInfo" id="infoValue"> {project.role}</p>
                    </div> : null
                }
                {project.link ?
                    <div className="infoListDiv">
                        <p className="projectInfo" id="infoTitle">Link:</p>
                        <p className="projectInfo" id="infoValue"><a className="projectInfo" target="blank" href={`https://${project.link}`}>{project.link}</a></p>
                    </div> : null
                }
                {project.github ?
                    <div className="infoListDiv">
                        <p className="projectInfo" id="infoTitle">Github:</p>
                        <p className="projectInfo" id="infoValue"><a className="projectInfo" target="blank" href={`https://${project.github}`}>{project.github}</a></p>
                    </div> : null
                }
            </div>
            <button onClick={() => history.push('/')}>X</button>
        </div>
    );
};

export default DetailView;
