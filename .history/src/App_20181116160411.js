import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet.1";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
      });
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
