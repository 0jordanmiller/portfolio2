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
              <img alt="profile" src="https://via.placeholder.com/150" />
              <h2 className="name">jordan miller</h2>
            </div>

            <ul id="ul-main-menu">
              <li>
                <NavLink className="main-menu" to="/">
                  home
                </NavLink>
              </li>
              <li>
                <NavLink className="main-menu" to="/projects">
                  projects
                </NavLink>
              </li>
              <li>
                <NavLink className="main-menu" to="/resume">
                  resume
                </NavLink>
              </li>
              <li>
                <NavLink className="main-menu" to="/contact">
                  contact
                </NavLink>
              </li>
            </ul>
            <div>
              <ul id="sm-bar">
                <li>
                  <a
                    className="social-media"
                    href="https://github.com/0jordanmiller"
                  >
                    github
                  </a>
                </li>
                <li>
                  <a
                    className="social-media"
                    href="https://www.linkedin.com/in/jordankenmiller/"
                  >
                    linkedin
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
