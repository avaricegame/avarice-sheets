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

  componentDidMount = () => {
    // fetch("http://localhost:2890")
    //   .then((response) => response.json())
    //   .then((response) => {
    //     characterSheet = response[0];
    //   });
    // fetch("http://localhost:2890/spells")
    //   .then((response) => response.json())
    //   .then((response) => {
    //     spells = response;
    //   });
    // fetch("http://localhost:2890/customabilities")
    //   .then((response) => response.json())
    //   .then((response) => {
    //     customAbilities = response;
    //   });
    // fetch("http://localhost:2890/races")
    //   .then((response) => response.json())
    //   .then((response) => {
    //     races = response;
    //   });
    // fetch("http://localhost:2890/classes")
    //   .then((response) => response.json())
    //   .then((response) => {
    //     classes = response;
    //   });
  };

  render() {
    const {} = this.state;

    let {
      characterSheet,
      spells,
      races,
      classes,
      customAbilities,
      deleteCustomAbility,
      addCustomAbility,
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
          <RaceAbilities races={races} characterSheet={characterSheet} />
        </div>

        {/****** BEGIN SPELLS SECTION ******/}
        <div className="spells bgb">
          <div className="heading-bar">
            <h2>Spells</h2>
          </div>
          <Spells spells={spells} characterSheet={characterSheet} />
        </div>

        {/****** BEGIN CLASS ABILITIES SECTION ******/}
        <div className="item-abilities bgb">
          <div className="heading-bar">
            <h2>Class Abilities</h2>
          </div>
          <ClassAbilities classes={classes} characterSheet={characterSheet} />
        </div>

        {/****** BEGIN CUSTOM ABILITIES SECTION ******/}
        <div className="other-abilities bgb">
          <div className="heading-bar">
            <h2>Other Abilities</h2>
          </div>
          <CustomAbilitiesForm addCustomAbility={addCustomAbility} />
          <CustomAbilities
            characterSheet={characterSheet}
            customAbilities={customAbilities}
            deleteCustomAbility={deleteCustomAbility}
          />
        </div>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Abilities;
