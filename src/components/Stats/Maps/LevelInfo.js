import React from "react";

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
  };

  render() {
    let {
      level,
      setLevel,
      excellenceChips,
      editExcellenceChips,
    } = this.props

    return (
      <React.Fragment>
        <h6>Level</h6>
        
        <h5>You are at level {level}</h5>
        {/* <button>Quick Level Up</button> */}
        <EditLevelForm 
        setLevel={setLevel}
        editExcellenceChips={editExcellenceChips}
        />
        <p style={{paddingBottom: "20px"}}>
          You currently have <strong>4</strong> Rank Points and <strong>2 </strong>
          Ability Scores Level Up points that you can use. Be sure to apply them
          to keep your character as buff and smart as possible!
        </p>

        <h6>Excelence Chips</h6>
        
        <h5>
          You have <span>{excellenceChips} </span>
          excelence chips
        </h5>
        <EditExcellenceChipsForm
        editExcellenceChips={editExcellenceChips}
        />
        {/* <button>Add an Excelence Chip</button> */}
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
