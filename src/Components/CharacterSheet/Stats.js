import React from "react"

// // IMPORT ALL OF THE MAPPING COMPONENTS
// import LevelInfo from "./Maps/LevelInfo"
// import ImportantStats from "./Maps/ImportantStats"
// import AbilityScores from "./Maps/AbilityScores"
// import Proficiencies from "./Maps/Proficiencies"
// import Skills from "./Maps/Skills"

// BEGIN CLASS

class Stats extends React.Component {
  render() {
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
        </div>

        {/****** BEGIN IMPORTANT STATS SECTION ******/}
        <div className="important-stats bgb bgb--overflow">
          <div className="heading-bar bgb--full-width">
            <h2>Important Stats</h2>
          </div>
        </div>

        {/****** BEGIN ABILITY SCORES SECTION ******/}
        <div className="ability-scores bgb bgb--overflow">
          <div className="heading-bar bgb--full-width">
            <h2>Ability Scores</h2>
          </div>
        </div>

        {/****** BEGIN PROFICIENCIES SECTION ******/}
        <div class="proficiencies bgb">
          <div class="heading-bar">
            <h2>Proficiencies</h2>
          </div>
        </div>

        {/****** BEGIN SKILLS SECTION ******/}
        <div class="skills bgb bgb--overflow">
          <div class="heading-bar bgb--full-width">
            <h2>Skills</h2>
          </div>
        </div>
      </React.Fragment>
    ) // END RETURN
  } // END RENDER
} // END CLASS

export default Stats
