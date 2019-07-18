import React from "react";
import Button from "../button";
import "./style.css";

function Panel() {
  return (
    <div className="panel">
      <div className="homepage-panel">
        <h1>fullstack developer</h1>
        <h2>blahblahbalbhlba</h2>
        <Button href="/what" text="check me out" />
      </div>
    </div>
  );
}

export default Panel;
