import React, { useEffect, useState } from "react";
import RepositoryItem from "./components/RepositoryItem";
import "./Projects.scss";
import gro from "./projects/gro";
import DetailView from "./DetailView";
import sightzing from "./projects/sightzing";
import crossPlatformExam from "./projects/crossPlatformExam";
import iOSExam from "./projects/iOSExam";
import photonAlarm from "./projects/photonAlarm";
import javaExam from "./projects/javaExam";
import kotlinExam from "./projects/kotlinExam";

const Projects = (props) => {

    const [getRepos, setRepos] = useState([]);
    const [getLanguages, setLanguages] = useState([]);
    const projects = [
        gro,
        crossPlatformExam,
        iOSExam,
        photonAlarm,
        javaExam,
        sightzing,
        kotlinExam
    ];

    useEffect(() => {
        getReposFromGit();
        console.log(props.reference);
      }, []);
    
      const getReposFromGit = async() => {
        const response = await fetch('https://api.github.com/users/marcustjensen/repos');
        const result = await response.json();
        console.log(result);
        setRepos(result);
      };
    
      const getLanguagesInRepo = async(name) => {
        const response = await fetch(`https://api.github.com/repos/marcustjensen/${name}/languages`);
        const result = await response.json();
        let languageList = [];
        for(let lnge in result) {
          lnge === "C++" ? languageList.push("cpp") : lnge === "C#" ? languageList.push("csharp") :
          languageList.push(lnge.toLowerCase());
        }
        return languageList;
      };

    return(
        <div class="projectsContainer" ref={props.reference}>
            <a id="contentText">My projects</a>
            <div id="reposList">
                {
                    /*getRepos.map( (repo) => {
                        console.log(getLanguagesInRepo(repo.name));
                        return (
                            <RepositoryItem
                                setIsDetail = {props.setIsDetail}
                                id = {getRepos.indexOf(repo)}
                                name = {repo.name}
                                description = {repo.description}
                                getLanguages = {getLanguagesInRepo}
                            />
                        );
                    })*/
                    projects.map((project) => {
                        return (
                            <div className="repoItemContainer">
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
      </div>
    );
}

export default Projects;
