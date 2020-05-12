import React, { Component } from "react";

// IMPORT FORMS
import EditExcellenceChipsForm from "../Forms/EditExcellenceChipsForm";
import EditLevelForm from "../Forms/EditLevelForm";

// BEGIN CLASS

class LevelInfo extends React.Component {
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
        <h4>Level</h4>
        <EditLevelForm />
        <h5>You are at level {/*characterSheet[0].stats.level*/}</h5>
        <button>Quick Level Up</button>
        <p>
          You currently have <span>4</span> Rank Points and <span>2</span>{" "}
          Ability Scores Level Up points that you can use. Be sure to apply them
          to keep your character as buff and smart as possible!
        </p>

        <h4>Excelence Chips</h4>
        <EditExcellenceChipsForm />
        <h5>
          You have <span>{/*characterSheet[0].stats.excellenceChips*/}</span>{" "}
          excelence chips
        </h5>
        <button>Add an Excelence Chip</button>
        <p>
          Want to earn an excellence chip? Do something epic and make sure the
          DM sees! Excellence Chips can be cashed in whenever you'd like for an
          immediate perfect roll. Use them wisely
        </p>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default LevelInfo;
