import React, { Component } from "react";

class CharacterDescription extends React.Component {
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
    const {} = this.state;
    let {
        characterSheet,
      } = this.props;
    return (
      <React.Fragment>
                {/* <p>{characterSheet[0].characterDescription.eyeColor}</p> */}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default CharacterDescription;