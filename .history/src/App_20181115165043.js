import React from "react";
import ReactDOM from "react-dom";

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.animal),
    React.createElement("h1", {}, props.breed)
  ]);
};

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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
