import React from "react";
import Button from "../button";
import "./style.css";

function HomepagePanel() {
  return (
    <div className="panel">
      <div className="homepage-panel">
        <div className="text">
          <h1 className="fullstack">fullstack</h1>
          <h1 className="fullstack">developer</h1>
          <h2>I'm a fullstack developer. Yeah</h2>
          <Button href="/what" text="check me out" />
        </div>
      </div>
    </div>
  );
}

export default HomepagePanel;
