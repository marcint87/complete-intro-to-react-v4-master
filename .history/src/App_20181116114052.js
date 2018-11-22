import React from "react";
import {
  render
} from "react-dom";
import Pet from "./Pet.1";

class App extends React.Component {
  handleTitleClick() {
    alert("msg");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1", {
          onClick: this.handleTitleClick
        },
        "Adopt me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Peeo",
        animal: "bird",
        breed: "Cocktail"
      }),
      React.createElement(Pet, {
        name: "REdngo",
        animal: "cat",
        breed: "Mixed"
      })
    ]);
  }
}
render(React.createElement(App), document.getElementById("root"));
