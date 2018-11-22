import React from "react";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location } = this.props;
    console.log(name);
  }
}

export default Pet;
