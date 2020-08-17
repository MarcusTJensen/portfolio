import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import RepositoryItem from './components/RepositoryItem';

function App() {

  const [getRepos, setRepos] = useState([]);

  useEffect(() => {
    getReposFromGit();
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

  return (
    <div className="App">
      <a>My projects :</a>
      <div id="reposList">
        {
          getRepos.map( (repo) => (
              <RepositoryItem name={repo.name} description={repo.description} getLanguages={getLanguagesInRepo} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
