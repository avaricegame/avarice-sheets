import React, { Component } from "react";

class CustomAbilities extends React.Component {
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
                                  customAbilities[0].map(function(ability) {
                                        let x = [
                                                <h4>{ability.name}</h4>,
                                                <h5>Available at Level {ability.level}</h5>,
                                                <p>{ability.description}</p>
                                              ]
                                              console.log(x)
                                        
                                      console.log(ability)
                                      console.log(ability.name)
   return x
                                        })} */}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default CustomAbilities;
