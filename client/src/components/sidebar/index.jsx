import React from "react";
import Button from "../button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="name">jordan miller</h2>
      <div className="main-bar">
        <img alt="profile" src="https://via.placeholder.com/350x150" />
        <ul>
          <li><Link className="main-menu" to='/'>Home</Link></li>
          <li><Link className="main-menu" to='/projects'>Projects</Link></li>
          <li><Link className="main-menu" to='/resume'>Resume</Link></li>
        </ul>
      </div>
      <div className="sm-bar">
        <ul>
          <li><Link className="social-media" to='/'>Home</Link></li>
          <li><Link className="social-media" to='/projects'>Projects</Link></li>
          <li><Link className="social-media" to='/resume'>Resume</Link></li>
          </ul>
      </div>
    </div>
  );
}

export default Sidebar;
