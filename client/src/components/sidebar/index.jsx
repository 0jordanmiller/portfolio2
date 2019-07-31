import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import HomepagePanel from "../homepagePanel";
import ProjectPanel from "../projectPanel";
import "./style.css";

class Sidebar extends Component {
  render() {
    return (
      <Router>
        <div className="sidebar">
          <div className="contents">
            <div className="picture-name">
              <img alt="profile" src="https://via.placeholder.com/350x150" />
              <h2 className="name">jordan miller</h2>
            </div>

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
            <div className="sm-bar">
              <ul>
                <li>
                  <a
                    className="social-media"
                    href="https://github.com/0jordanmiller"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="social-media"
                    href="https://www.linkedin.com/in/jordankenmiller/"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Route path="/" exact component={HomepagePanel} />
        <Route path="/projects" exact component={ProjectPanel} />
      </Router>
    );
  }
}

export default Sidebar;
