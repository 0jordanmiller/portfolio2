import React from "react";
import "./style.css";

function Button(props) {
  return (
    <div>
      <a href={props.href}>{props.text}</a>
    </div>
  );
}

export default Button;
