// var React = require("react");
// var ReactDom = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

const name = "V";

const number = 8;
const date = new Date();

ReactDOM.render(
  <div>
    <h1 className="heading">Hello {name}!</h1>
    <p>My lucky number is {Math.floor(Math.random() * number)}</p>
    <h2>My favorite things are</h2>
    <ul>
      <li>coffee</li>
      <li>tennis</li>
      <li>sun</li>
    </ul>
    <p>created by {name}</p>
    <p>copy right {date.getFullYear()}</p>
  </div>,

  document.getElementById("root")
);
