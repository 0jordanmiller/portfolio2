import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import "./style.css";

function HomepagePanel() {
  return (
    <div className="panel">
      <div className="text">
        <h1 className="fullstack">fullstack</h1>
        <h1 className="fullstack">developer</h1>
        <h2 className="summary">I'm a fullstack developer. Yeah</h2>
        <NavLink to="/projects">Check Me Out</NavLink>
      </div>
    </div>
  );
}

export default HomepagePanel;
