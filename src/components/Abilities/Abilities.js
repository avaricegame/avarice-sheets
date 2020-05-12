import React, { Component } from "react";

// IMPORT ALL THE FORM COMPONENTS
import CustomAbilitiesForm from "./Forms/CustomAbilitiesForm";

// IMPORT ALL OF THE MAPPING COMPONENTS
import RaceAbilities from "./Maps/RaceAbilities";
import ClassAbilities from "./Maps/ClassAbilities";
import Spells from "./Maps/Spells";
import CustomAbilities from "./Maps/CustomAbilities";

// BEGIN CLASS

class Abilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    const {} = this.state;

    fetch("", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  };

  render() {
    const {} = this.state;

    let {
      characterSheet,
      weapons,
      armour,
      items,
      equipmentAbilities,
    } = this.props;

    return (
      <React.Fragment>
        <div className="secondary-header">
          <h1>Abilities</h1>
        </div>

        {/****** BEGIN RACE ABILITIES SECTION ******/}
        <div className="race-class-abilities bgb">
          <div className="heading-bar">
            <h2>Race Abilities</h2>
          </div>
          <RaceAbilities />
        </div>

        {/****** BEGIN SPELLS SECTION ******/}
        <div className="spells bgb">
          <div className="heading-bar">
            <h2>Spells</h2>
          </div>
          <Spells />
        </div>

        {/****** BEGIN CLASS ABILITIES SECTION ******/}
        <div className="item-abilities bgb">
          <div className="heading-bar">
            <h2>Class Abilities</h2>
          </div>
          <ClassAbilities />
        </div>

        {/****** BEGIN CUSTOM ABILITIES SECTION ******/}
        <div className="other-abilities bgb">
          <div className="heading-bar">
            <h2>Other Abilities</h2>
          </div>
          <CustomAbilitiesForm />
          <CustomAbilities />
        </div>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Abilities;