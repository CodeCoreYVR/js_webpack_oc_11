// import "./a";
// console.log("Hello, World");
import React from "react";
import ReactDOM from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import "./css/master.scss";
import WebpackLogo from "./images/webpack_logo.png";

const App = () => {
  const position = [49.2125028, -122.9235534];
  return (
    <div>
      <Map center={position} zoom={13} style={{ height: "500px" }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Codecore College. <br /> New Westminster BC, V3M 6Z1
          </Popup>
        </Marker>
      </Map>
      <img src={WebpackLogo} />
      <button className="btn btn-primary">Primary Button</button>
      <button className="btn btn-defualt mySpBtn">Default Button</button>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.createElement("div");
  document.body.append(root);

  ReactDOM.render(<App />, root);
});
