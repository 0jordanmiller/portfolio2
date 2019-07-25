import React from 'react';
import Sidebar from './components/sidebar';
import HomepagePanel from './components/homepagePanel';
import ProjectPanel from './components/projectPanel';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomepagePanel} />
          <Route path="/projects" component={ProjectPanel} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
