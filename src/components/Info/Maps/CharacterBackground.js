import React from "react";

class CharacterBackground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { characterSheet } = this.props;
    return (
      <React.Fragment>
        <div className="weapon-div">
          <h6>Character Background</h6>
          <h5>For: {characterSheet.characterName}</h5>

          <p><strong>Who were your parents? How were you raised? Do you have any
                    close family?</strong><br />
          {characterSheet.characterBackground.q1}</p>

          <p><strong>Where/From whom did you learn your skills?</strong><br />
          {characterSheet.characterBackground.q2}</p>

          <p><strong>Name your 3 most important personal beliefs:</strong><br />
          {characterSheet.characterBackground.q3}</p>

          <p><strong>Name 3 or more character flaws that are most likely to trouble
                    you:</strong><br />
          {characterSheet.characterBackground.q4}</p>

          <p><strong>What do you secretly fear even in times of easy-going peace?
                    Why?</strong><br />
          {characterSheet.characterBackground.q5}</p>

          <p><strong>Are you ({characterSheet.characterName}) a hero? Why or why not?</strong><br />
          {characterSheet.characterBackground.q6}</p>

          <p><strong>What are your goals (both long and short term)?</strong><br />
          {characterSheet.characterBackground.q7}</p>

          <p><strong>Are you ({characterSheet.characterName}) merciful? Why or why not?</strong><br />
          {characterSheet.characterBackground.q8}</p>

          <p><strong>Why are you an adventurer?</strong><br />
          {characterSheet.characterBackground.q9}</p>

        </div>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default CharacterBackground;
