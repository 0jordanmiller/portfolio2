import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./style.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Router>
        <h2 className="name">jordan miller</h2>
        <div className="main-bar">
          <img alt="profile" src="https://via.placeholder.com/350x150" />
          <ul>
            <li>
              <NavLink className="main-menu" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="main-menu" to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="main-menu" to="/resume">
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sm-bar">
          <ul>
            <li>
              <NavLink className="social-media" to="/">
                Github
              </NavLink>
            </li>
            <li>
              <NavLink className="social-media" to="/projects">
                NavLinkedIn
              </NavLink>
            </li>
            <li>
              <NavLink className="social-media" to="/resume">
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </Router>
    </div>
  );
}

export default Sidebar;
