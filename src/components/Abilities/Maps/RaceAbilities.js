import React, { Component } from "react";

class RaceAbilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   onChange = (e) => {
  //     console.log(e.target.value);
  //     console.log(e.target.name);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  onSubmit = (e) => {
    e.preventDefault();
    const {} = this.state;

    fetch("", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  };

  render() {
    const { characterSheet } = this.state;

    return (
      <React.Fragment>
        {/* {
          //characterSheet[0]['inventory']['weapons'].map(function(weapon) {
          races[0].specialTraits.map(function (trait) {
            let x = [<h4>{trait.name}</h4>, <p>{trait.description}</p>];

            console.log(x);

            console.log(trait);
            console.log(trait.name);

            return x;
          })
        } */}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default RaceAbilities;
