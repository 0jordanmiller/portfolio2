import React from "react";
import Button from "../button";
import "./style.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="name">jordan miller</h2>
      <div>
        <img src="https://via.placeholder.com/350x150" />
        <Button className="main-menu" href="/projects" text="projects" />
        <Button className="main-menu" href="/resume" text="resume" />
        <Button className="main-menu" href="/contact" text="contact" />
      </div>
      <div>
        <Button className="social-media" href="/github" text="github" />
        <Button className="social-media" href="/linkedin" text="linkedin" />`
        <Button className="social-media" href="/contact" text="contact" />
      </div>
    </div>
  );
}

export default Sidebar;
