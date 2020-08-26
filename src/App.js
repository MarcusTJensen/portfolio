import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import Intro from "./Intro";
import Projects from "./Projects";
import ContactInfo from "./ContactInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailView from "./DetailView";
import Home from './Home';

function App() {

  

  return (
                <Router>
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route path="/details">
                      <DetailView />
                    </Route>
                  </Switch>
                  </Router>
  );
}

export default App;
