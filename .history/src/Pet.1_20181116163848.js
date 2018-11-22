import React from "react";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location } = this.props;

    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] == "pn");
    }
  }
}

export default Pet;
