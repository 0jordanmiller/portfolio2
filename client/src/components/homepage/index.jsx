import React from "react";
import Sidebar from "../sidebar";
import Panel from "../panel";
import "./style.css";

function Homepage() {
  return (
    <div className="App">
      <Sidebar />
      <Panel />
    </div>
  );
}

export default Homepage;
