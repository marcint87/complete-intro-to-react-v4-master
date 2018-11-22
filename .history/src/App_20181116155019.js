import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet.1";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  handleTitleClick() {
    alert("msg");
  }
  render() {
    return (
      <div>
        <h1>Adopt me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanse" />
        <Pet name="Pepe" animal="cat" breed="mix" />
        <Pet name="Doiml" animal="bird" breed="fer" />
      </div>
    );
  }
}
render(React.createElement(App), document.getElementById("root"));
