import React from "react";
import Sidebar from "../sidebar";
import Panel from "../panel";
import "./style.css";

function Homepage() {
  return (
    <div className="whole-app">
      <Sidebar className="whole-app" />
      <Panel className="whole-app" />
    </div>
  );
}

export default Homepage;
