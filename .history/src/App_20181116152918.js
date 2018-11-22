import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.1";

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
