import React, { Component } from "react";

class Money extends React.Component {
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
    //const { characterSheet } = this.state;
    let {
      characterSheet,
    } = this.props;

    return (
      <React.Fragment>
        <div className="weapon-div">
        <h6>Uni-Credits/Gold</h6>
          <h5>Current Savings:</h5>
          <h3>{characterSheet["inventory"]["money"]} Gold</h3>
          <h5>Liquidated Savings:</h5>
          <h3>895 Gold</h3>
          </div>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Money;
