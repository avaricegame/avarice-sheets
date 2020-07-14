import React, { Component } from "react"

// // IMPORT ALL THE FORM COMPONENTS
// import CharacterDescriptionForm from "../../../Forms/CharacterDescriptionForm"
// import CharacterBackgroundForm from "../../../Forms/CharacterBackgroundForm"

// // IMPORT ALL OF THE MAPPING COMPONENTS
// import CharacterDescription from "./Maps/CharacterDescription"
// import CharacterBackground from "./Maps/CharacterBackground"
// import RaceDetails from "./Maps/RaceDetails"
// import ClassDetails from "./Maps/ClassDetails"

// BEGIN CLASS

class Info extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="secondary-header">
          <h1>Info</h1>
        </div>

        {/****** BEGIN CAMPAIGN INFO SECTION ******/}
        <div className="campaign-details bgb">
          <div className="heading-bar">
            <h2>Campaign Details</h2>
          </div>
          <p>The Campaign functionality is currently under construction, but will be available soon!</p>
        </div>

        {/****** BEGIN CHARACTER INFO SECTION ******/}
        <div className="character-details bgb">
          <div className="heading-bar">
            <h2>Character Background and Information</h2>
          </div>
          {/* <CharacterDescriptionForm /> */}
          {/* <CharacterDescription characterSheet={characterSheet} /> */}
          {/* <CharacterBackgroundForm /> */}
          {/* <CharacterBackground characterSheet={characterSheet} /> */}
        </div>

        {/****** BEGIN RACE INFO SECTION ******/}
        <div className="race-details bgb">
          <div className="heading-bar">
            <h2>Race Details and Information</h2>
          </div>
          {/* <RaceDetails races={races} characterSheet={characterSheet} /> */}
        </div>

        {/****** BEGIN CLASS INFO SECTION ******/}
        <div className="class-details bgb">
          <div className="heading-bar">
            <h2>Class Details and Information</h2>
          </div>
          {/* <ClassDetails classes={classes} characterSheet={characterSheet} /> */}
        </div>

        {/****** BEGIN QUICK RULES SECTION ******/}
        <div className="quick-rules bgb">
          <div className="heading-bar">
            <h2>Quick Rules</h2>
          </div>
          <p>The quick rules feature is currently under construction but will be done soon!</p>
        </div>
      </React.Fragment>
    ) // END RETURN
  } // END RENDER
} // END CLASS

export default Info
