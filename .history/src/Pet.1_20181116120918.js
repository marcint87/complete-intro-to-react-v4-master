import React from "react";
const Pet = props => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, props.name),
  //     React.createElement("h1", {}, props.animal),
  //     React.createElement("h1", {}, props.breed)
  //   ]);
  return (
    <div>
      <h1>{props.name.toUpperCase()}</h1>
    </div>
  );
};

export default Pet;
