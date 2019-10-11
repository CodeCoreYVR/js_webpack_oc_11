// import "./a";
// console.log("Hello, World");
import React from "react";
import ReactDOM from "react-dom";

import "./css/master.css";
import WebpackLogo from "./images/webpack_logo.png";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.createElement("div");
  document.body.append(root);

  ReactDOM.render(<img src={WebpackLogo} width="500px" height="100px" />, root);
});
