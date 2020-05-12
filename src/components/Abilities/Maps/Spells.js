import React, { Component } from "react";

class Spells extends React.Component {
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
          spells[0].apaspells.map(function (spell) {
            let x = [
              <h4>{spell.spellName}</h4>,
              <h5> Spell Points: {spell.spellPoints}</h5>,
              <p>{spell.spellDescription}</p>,
            ];

            console.log(x);

            console.log(spells);
            console.log(spell.name);

            return x;
          })
        } */}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Spells;
