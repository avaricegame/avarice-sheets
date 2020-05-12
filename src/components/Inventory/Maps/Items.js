import React, { Component } from "react";

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { characterSheet } = this.props;
    return (
      <React.Fragment>
        <h2>Custom Items</h2>
        {characterSheet["inventory"]["customItems"].map(function (item) {
          let x = [
            <h4>{item.itemName}</h4>,
            <div className="item-details">
              <p>
                <strong>Item Description:</strong> {item.itemDescription}
              </p>
            </div>,
          ];
          return x;
        })}
        <h2>Normal Items</h2>
        {characterSheet["inventory"]["items"].map(function (item) {
          let x = [
            <h4>{item.name}</h4>,
            <div className="item-details">
              <p>
                <strong>Item Description:</strong> {item.itemDescription}
              </p>
            </div>,
          ];
          return x;
        })}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Items;
