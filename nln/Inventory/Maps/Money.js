import React, { Component } from "react";

class Money extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    let {
      characterSheet,
      money,
    } = this.props;

    return (
      <React.Fragment>
        <div className="weapon-div">
        <h6>Uni-Credits/Gold</h6>
          <h5>Current Savings:</h5>
          <h3>{money} Gold</h3>
          </div>
          {/* <div className="weapon-div">
            <h6>Liquidated Wealth</h6>
          <h5>Liquidated Savings:</h5>
          <h3>895 Gold</h3>
          </div> */}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Money;
