import React from "react";
const Pet = props => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, props.name),
  //     React.createElement("h1", {}, props.animal),
  //     React.createElement("h1", {}, props.breed)
  //   ]);
  return (
    <div id="my-id">
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;
