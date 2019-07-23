import React from "react";
import Button from "../button";
import "./style.css";

function ProjectPanel() {
  return (
    <div className="panel">
      <div className="projects-panel">
        <div className="text">
          <h2 className="project-name">Projects</h2>
          <p>Hardcoded description of project (for now)</p>
          <Button href="/github" text="github" />
          <Button href="/live-site" text="live site" />
        </div>
      </div>
    </div>
  );
}

export default ProjectPanel;
