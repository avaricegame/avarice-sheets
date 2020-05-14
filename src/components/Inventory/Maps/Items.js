import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { characterSheet } = this.props;
    return (
      <React.Fragment>
        {characterSheet["inventory"]["customItems"].map(function (item) {
          let x = [
            <div className="weapon-div">
              <Toggle>
                {({ on, toggle }) => (
                  <div>
                    <h6 onClick={toggle}>{item.itemName}</h6>
                    <h5 onClick={toggle}>Item Type</h5>
                    <p onClick={toggle} className="cursor">
                      <strong>Description:</strong> {item.itemDescription}
                    </p>
                    {on && (
                      <React.Fragment>
                        <h6 className="delete-button">Delete</h6>
                      </React.Fragment>
                    )}
                  </div>
                )}
              </Toggle>
            </div>,
          ];
          return x;
        })}
        {characterSheet["inventory"]["items"].map(function (item) {
          let x = [
            <div className="weapon-div">
              <Toggle>
                {({ on, toggle }) => (
                  <div>
                    <h6 onClick={toggle}>{item.name}</h6>
                    <h5 onClick={toggle}>Item Type</h5>
                    <p onClick={toggle} className="cursor">
                      <strong>Description:</strong> {item.itemDescription}
                    </p>
                    {on && (
                      <React.Fragment>
                        <h6 className="delete-button">Delete</h6>
                      </React.Fragment>
                    )}
                  </div>
                )}
              </Toggle>
            </div>,
          ];
          return x;
        })}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Items;
