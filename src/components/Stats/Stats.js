import React, { Component } from "react";

// IMPORT ALL OF THE MAPPING COMPONENTS
import LevelInfo from "./Maps/LevelInfo";
import ImportantStats from "./Maps/ImportantStats";
import AbilityScores from "./Maps/AbilityScores";
import Proficiencies from "./Maps/Proficiencies";
import Skills from "./Maps/Skills";

// BEGIN CLASS

class Stats extends React.Component {
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
      classes,
      races,
      phyTotal,
      refTotal,
      intTotal,
      chaTotal,
      calculatePhyTotal,
      calculateRefTotal,
      calculateIntTotal,
      calculateChaTotal,
      calculateSpeedTotal,
      calculatePerceptionTotal,
      calculateReactionTotal,
      calculateFortitudeTotal,
      calculateStealthTotal,
      skillsStealth,
      calculateSkillsStealth,
      equipmentHp,
      equipmentReflex, 
      equipmentPhysique,
      equipmentSpeed,
      equipmentIntelligence,
      equipmentCharisma,
      equipmentPerception,
      equipmentStealth,
      equipmentRangedAcc,
      equipmentMeleeAcc,

    } = this.props;

    console.log(refTotal, "LOGGIN FROM STATS")

    return (
      <React.Fragment>
        <div className="secondary-header">
        <h1>Stats</h1>
        </div>

        {/****** BEGIN LEVEL AND EXCELLENCE CHIPS SECTION ******/}
        <div className="level bgb">
        <div className="heading-bar">
          <h2>Level and Experience</h2>
        </div>
        <LevelInfo />
      </div>

        {/****** BEGIN IMPORTANT STATS SECTION ******/}
        <div className="important-stats bgb bgb--overflow">
        <div className="heading-bar bgb--full-width">
          <h2>Important Stats</h2>
        </div>
        <ImportantStats 
        equipmentSpeed={equipmentSpeed}
        equipmentPerception={equipmentPerception}
        equipmentStealth={equipmentStealth}
        equipmentReflex={equipmentReflex}
        equipmentPhysique={equipmentPhysique}
        phyTotal={phyTotal} refTotal={refTotal} intTotal={intTotal} chaTotal={chaTotal} calculateSpeedTotal={calculateSpeedTotal} calculatePerceptionTotal={calculatePerceptionTotal} calculateReactionTotal={calculateReactionTotal} calculateFortitudeTotal={calculateFortitudeTotal} calculateStealthTotal={calculateStealthTotal} skillsStealth={skillsStealth} />
      </div>

        {/****** BEGIN ABILITY SCORES SECTION ******/}
        <div className="ability-scores bgb bgb--overflow">
        <div className="heading-bar bgb--full-width">
          <h2>Ability Scores</h2>
        </div>
        <AbilityScores 
        equipmentPhysique={equipmentPhysique}
        equipmentReflex={equipmentReflex}
        equipmentIntelligence={equipmentIntelligence}
        equipmentCharisma={equipmentCharisma}
        characterSheet={characterSheet} classes={classes} races={races} phyTotal={phyTotal} refTotal={refTotal} intTotal={intTotal} chaTotal={chaTotal} calculatePhyTotal={calculatePhyTotal} calculateRefTotal={calculateRefTotal} calculateIntTotal={calculateIntTotal} calculateChaTotal={calculateChaTotal} />
      </div>

        {/****** BEGIN PROFICIENCIES SECTION ******/}
        <div class="proficiencies bgb">
        <div class="heading-bar">
          <h2>Proficiencies</h2>
        </div>
        <Proficiencies />
      </div>

        {/****** BEGIN SKILLS SECTION ******/}
        <div class="skills bgb bgb--overflow">
        <div class="heading-bar bgb--full-width">
          <h2>Skills</h2>
        </div>
        <Skills characterSheet={characterSheet} classes={classes} phyTotal={phyTotal} refTotal={refTotal} intTotal={intTotal} chaTotal={chaTotal} calculateSkillsStealth={calculateSkillsStealth} />
      </div>

      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Stats;

// equipmentHp={equipmentHp}
//             equipmentReflex={equipmentReflex}
//             equipmentPhysique={equipmentPhysique}
//             equipmentSpeed={equipmentSpeed}
//             equipmentIntelligence={equipmentIntelligence}
//             equipmentCharisma={equipmentCharisma}
//             equipmentPerception={equipmentPerception}
//             equipmentStealth={equipmentStealth}
//             equipmentRangedAc={equipmentRangedAc}
//             equipmentMeleeAcc={equipmentMeleeAcc}
