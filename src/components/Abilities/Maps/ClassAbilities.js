import React, { Component } from "react";

class ClassAbilities extends React.Component {
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
    const {characterSheet} = this.state;

    return (
      <React.Fragment>
           {/* {//characterSheet[0]['inventory']['weapons'].map(function(weapon) {
                                  classes[0].abilities.map(function(classes) {
                                    let x = [
                                            <h4>{classes.name}</h4>,
                                            <h5>Available at Level {classes.level}</h5>,
                                            <p>{classes.description}</p>
                                          ]

                                          console.log(x)
                                    
                                  console.log(classes)
                                  console.log(classes.name)


return x
                                    })}  */}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default ClassAbilities;