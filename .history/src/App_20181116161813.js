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

        this.setState({
          pets
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Adopt me!</h1>
        <div>
          {this.state.pets.map(pet => {
            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(", ");
            } else {
              breed = pet.breeds.breed;
            }
            return (
              <Pet animal={pet.animal} name={pet.name} breed={pet.breed} />
            );
          })}
        </div>
      </div>
    );
  }
}
render(React.createElement(App), document.getElementById("root"));
