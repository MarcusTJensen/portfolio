import React, { useEffect, useState } from "react";
import RepositoryItem from "./components/RepositoryItem";
import "./Projects.scss";

const Projects = (props) => {

    const [getRepos, setRepos] = useState([]);

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
                    getRepos.map( (repo) => (
                        <RepositoryItem id={getRepos.indexOf(repo)} name={repo.name} description={repo.description} getLanguages={getLanguagesInRepo} />
                    ))
                }
            </div>
      </div>
    );
}

export default Projects;
